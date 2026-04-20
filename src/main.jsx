import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// UBAH: Gunakan /react untuk proyek Vite/React biasa
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"; // Opsional: Untuk pantau jumlah pengunjung

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* Tambahkan di sini agar aktif di seluruh rute */}
      <SpeedInsights />
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
);
