import React, { useState, useRef, useEffect } from 'react';

// Tempel URL Raw Gist kamu di sini
const JSON_URL = "https://gist.githubusercontent.com/willieson/9a617714594de39f8184aea14732c367/raw/mlbb-heroes.json";
const sliceColors = [
  '#1e293b', '#334155', '#0f172a', '#475569', 
  '#1e1b4b', '#312e81', '#1e3a8a', '#172554'
];

export default function MLBBSpinner() {
  const [heroData, setHeroData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedRole, setSelectedRole] = useState('EXP');
  const [winner, setWinner] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const canvasRef = useRef(null);
  const currentAngleRef = useRef(0);
  const animationFrameRef = useRef(null);

  // Fetch Data Hero dari Gist saat pertama kali dimuat
useEffect(() => {
  // Tambahkan timestamp query parameter agar tidak kena cache CDN GitHub
  fetch(`${JSON_URL}?t=${Date.now()}`)
    .then((res) => res.json())
    .then((data) => {
      setHeroData(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Gagal mengambil data hero:", err);
      setLoading(false);
    });
}, []);

  const currentHeroes = heroData[selectedRole] || [];

  const drawWheel = (angle) => {
    const canvas = canvasRef.current;
    if (!canvas || currentHeroes.length === 0) return;
    const ctx = canvas.getContext('2d');
    const numSlices = currentHeroes.length;
    const radius = canvas.width / 2;
    const sliceAngle = (2 * Math.PI) / numSlices;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < numSlices; i++) {
      const startAngle = angle + i * sliceAngle;
      const endAngle = startAngle + sliceAngle;

      ctx.beginPath();
      ctx.moveTo(radius, radius);
      ctx.arc(radius, radius, radius - 8, startAngle, endAngle);
      ctx.closePath();

      ctx.fillStyle = sliceColors[i % sliceColors.length];
      ctx.fill();
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.save();
      ctx.translate(radius, radius);
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText(currentHeroes[i], radius - 20, 5);
      ctx.restore();
    }

    ctx.beginPath();
    ctx.arc(radius, radius, radius - 4, 0, 2 * Math.PI);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 8;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(radius, radius, 25, 0, 2 * Math.PI);
    ctx.fillStyle = '#0f172a';
    ctx.fill();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.stroke();
  };

  useEffect(() => {
    currentAngleRef.current = 0;
    setWinner(null);
    setShowModal(false);
    drawWheel(0);
  }, [selectedRole, heroData]);

  const spin = () => {
    if (isSpinning || currentHeroes.length === 0) return;

    setIsSpinning(true);
    setWinner(null);
    setShowModal(false);

    const spinDuration = 4000;
    const start = performance.now();
    const startAngle = currentAngleRef.current;
    const totalRotation = 5 * 2 * Math.PI + Math.random() * 2 * Math.PI;

    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / spinDuration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentAngle = startAngle + totalRotation * easeOut;
      
      currentAngleRef.current = currentAngle;
      drawWheel(currentAngle);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        calculateWinner(currentAngle);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const calculateWinner = (finalAngle) => {
    const numSlices = currentHeroes.length;
    const sliceAngle = (2 * Math.PI) / numSlices;
    const normalizedAngle = (finalAngle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    const pointerAngle = (1.5 * Math.PI - normalizedAngle + 2 * Math.PI) % (2 * Math.PI);
    const winningIndex = Math.floor(pointerAngle / sliceAngle);
    
    setWinner(currentHeroes[winningIndex]);
    setShowModal(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-amber-500 flex items-center justify-center font-bold">
        Memuat Data Hero...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4 relative">
      <h1 className="text-3xl font-extrabold text-amber-500 mb-6 tracking-wide drop-shadow-md">
        MLBB HERO PICKER
      </h1>

      {/* Role Selection Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 bg-slate-900 p-2 rounded-xl border border-slate-800">
        {Object.keys(heroData).map((role) => (
          <button
            key={role}
            onClick={() => setSelectedRole(role)}
            disabled={isSpinning}
            className={`px-4 py-2 rounded-lg font-bold text-sm transition-all duration-200 ${
              selectedRole === role
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
            } ${isSpinning ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Spinner Container */}
      <div className="relative mb-8 flex flex-col items-center">
        <div className="absolute -top-3 z-10 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-amber-400 filter drop-shadow-md" />
        <canvas
          ref={canvasRef}
          width={360}
          height={360}
          className="rounded-full shadow-2xl border-4 border-amber-500/20"
        />
      </div>

      {/* Spin Button */}
      <button
        onClick={spin}
        disabled={isSpinning}
        className={`px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-lg rounded-xl shadow-lg transform active:scale-95 transition-all ${
          isSpinning ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSpinning ? 'SPINNING...' : `SPIN ${selectedRole} HERO`}
      </button>

      {/* Pop-up Modal Hasil */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-slate-900 border-2 border-amber-500/50 rounded-2xl p-6 text-center max-w-sm w-full shadow-2xl shadow-amber-500/10">
            <h2 className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-1">
              Hero Terpilih ({selectedRole})
            </h2>
            <div className="text-4xl font-black text-amber-400 my-4 tracking-wide">
              {winner}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-2 w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-colors"
            >
              MANTAP, PAKAI HERO INI!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}