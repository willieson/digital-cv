import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [particles, setParticles] = useState([]);
  const [isShaking, setIsShaking] = useState(false);

  // Refs untuk Audio agar tidak re-render
  const scoreAudio = useRef(null);

  useEffect(() => {
    // 1. Preload Audio
    scoreAudio.current = new Audio("/click.mp3");
    scoreAudio.current.volume = 0.5;

    // 2. Tracking Mouse Position
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 3. Generate Initial Particles
    const initialParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 80 + 10 + "%",
      top: Math.random() * 80 + 10 + "%",
      size: Math.random() * 15 + 10 + "px",
    }));
    setParticles(initialParticles);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // --- TRIGGER SUARA & EFEK SAAT SCORE BERTAMBAH ---
  useEffect(() => {
    if (score > 0) {
      // Mainkan suara
      if (scoreAudio.current) {
        scoreAudio.current.currentTime = 0;
        scoreAudio.current.play().catch(() => {});
      }

      // Efek guncangan (visual feedback)
      setIsShaking(true);
      const timer = setTimeout(() => setIsShaking(false), 200);
      return () => clearTimeout(timer);
    }
  }, [score]);

  const handleCatch = (id) => {
    setScore((prev) => prev + 10);
    // Pindahkan partikel yang ditangkap ke lokasi baru
    setParticles((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              left: Math.random() * 80 + 10 + "%",
              top: Math.random() * 80 + 10 + "%",
            }
          : p,
      ),
    );
  };

  return (
    <div className="h-screen w-full bg-slate-950 overflow-hidden relative flex flex-col items-center justify-center text-white font-sans selection:bg-blue-500/30">
      {/* Dynamic Background Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.12), transparent 80%)`,
        }}
      />

      {/* Floating Particles (Game Objects) */}
      {particles.map((p) => (
        <div
          key={p.id}
          onClick={() => handleCatch(p.id)}
          className="absolute rounded-full cursor-crosshair transition-all duration-1000 ease-out hover:scale-150 hover:brightness-125 z-20"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: "#3B82F6",
            boxShadow: "0 0 20px #3B82F6",
            // Parallax effect berdasarkan posisi mouse
            transform: `translate(${(mousePos.x - window.innerWidth / 2) * 0.03}px, ${(mousePos.y - window.innerHeight / 2) * 0.03}px)`,
          }}
        />
      ))}

      {/* Main Interactive HUD */}
      <div
        className={`z-10 bg-slate-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl max-w-lg w-full mx-4 transition-transform duration-200 ${isShaking ? "scale-105 border-blue-500/50" : "scale-100"}`}
      >
        <div className="mb-10 text-center md:text-left">
          <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-blue-400 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
              Interface Terminal
            </span>
          </div>
          <h1 className="text-5xl font-black italic tracking-tighter leading-none">
            Michael
            <br />
            <span className="text-blue-500">Willieson</span>
          </h1>
        </div>

        {/* Score & Engine Stats */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-black/40 p-5 rounded-3xl border border-white/5 group overflow-hidden relative">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">
              State Score
            </p>
            <p
              className={`text-4xl font-mono font-bold transition-colors ${isShaking ? "text-blue-400" : "text-white"}`}
            >
              {score.toString().padStart(4, "0")}
            </p>
            {/* Visual pulse background when score increases */}
            <div
              className={`absolute inset-0 bg-blue-500/10 transition-opacity duration-300 ${isShaking ? "opacity-100" : "opacity-0"}`}
            />
          </div>
          <div className="bg-black/40 p-5 rounded-3xl border border-white/5">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">
              Core Engine
            </p>
            <p className="text-2xl font-bold text-slate-200">REACT_18</p>
          </div>
        </div>
      </div>

      {/* Footer Meta Data */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-20 font-mono text-[9px] tracking-[0.3em] uppercase">
        <p>
          System Coordinates: {Math.round(mousePos.x)} :{" "}
          {Math.round(mousePos.y)}
        </p>
        <p>Interactive Portfolio Framework © 2026</p>
      </div>

      {/* Background Decorative Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default Home;
