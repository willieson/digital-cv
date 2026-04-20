import { useEffect, useRef, useState } from "react";

const CurvyPath = () => {
  const pathRef = useRef(null);
  const carRef = useRef(null);
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setDocHeight(document.documentElement.scrollHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      const scrollPercent = Math.min(
        Math.max(scrollTop / totalScrollable, 0),
        1,
      );

      const path = pathRef.current;
      const car = carRef.current;

      if (path && car) {
        const pathLength = path.getTotalLength();
        const point = path.getPointAtLength(scrollPercent * pathLength);

        const carSize = 30;
        const offsetX = carSize / 2;
        const offsetY = carSize / 2;

        car.setAttribute(
          "transform",
          `translate(${point.x - offsetX}, ${point.y - offsetY})`,
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    const duration = 2000; // Durasi dalam milidetik (2 detik). Makin besar, makin lambat.
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Fungsi Easing (EaseInOutQuad) agar start dan stop tidak kaku
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <svg
      className="pointer-events-none absolute right-0 top-0 w-32 z-[9999] overflow-visible hidden md:block"
      style={{ height: `${docHeight}px` }}
      viewBox={`0 0 400 4000`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        ref={pathRef}
        d="
          M150,100
          C280,400 50,600 150,900
          C280,1200 80,1500 200,1800
          C320,2100 80,2400 200,2700
          C320,3000 80,3300 200,3600
          C320,3800 80,3900 200,3980"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="3"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />

      <image
        href="/car.svg"
        width="30"
        height="30"
        ref={carRef}
        // Mengaktifkan klik hanya pada mobil
        className="pointer-events-auto cursor-pointer"
        onClick={scrollToTop}
        style={{
          transition: "transform 0.1s ease-out",
          filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))",
        }}
      />
    </svg>
  );
};

export default CurvyPath;
