"use client";
import React, { useState } from "react";

interface Props {
  onUpload: (file: File) => void;
  loading: boolean;
}

export default function UploadSection({ onUpload }: Props) {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (file) onUpload(file);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border border-pink-500/30 rounded-xl p-6 w-full max-w-xl shadow-lg">
      <h2 className="text-lg font-semibold text-pink-400 mb-4 flex items-center gap-2">
        📤 Enviar Imagem
      </h2>

      <input
        type="file"
        accept="image/*"
        className="mb-2 w-full file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-pink-600 file:text-white hover:file:bg-pink-700"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <p className="text-sm text-gray-300 mb-4">Escolha uma imagem escaneada da redação.</p>

      <button
        onClick={handleUpload}
        disabled={!file}
        className="bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 hover:scale-[1.02] transition-transform duration-200 w-full disabled:bg-pink-800 disabled:opacity-60"
      >
        Processar
      </button>
    </div>
  );
}
