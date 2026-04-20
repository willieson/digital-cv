import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      onFinish();
    }, 2000); // tampil 2 detik

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <h1 className="text-4xl font-bold text-blue-600 animate-pulse">
        Digital CV by @Michael Willieson
      </h1>
    </div>
  );
}
