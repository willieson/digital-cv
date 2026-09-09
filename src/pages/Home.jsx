import React from 'react';
// Pastikan path ke file MLBBSpinner.jsx sudah sesuai lokasi foldermu
import MLBBSpinner from "../components/MLBBSpinner";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Jika kamu punya navbar/header, bisa ditaruh di sini */}
      
      {/* Memanggil Komponen Spinner */}
      <MLBBSpinner />

      {/* Jika kamu punya footer, bisa ditaruh di bawahnya */}
    </main>
  );
}