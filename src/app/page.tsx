"use client"
import React from "react";
import ImagePreview from "./components/ImagePreview";
import StatusMessage from "./components/StatusMessage";
import UploadSection from "./components/UploadSection";



import { useState } from "react";


export default function HomePage() {
  const [originalUrl, setOriginalUrl] = useState<string>();
  const [processedUrl, setProcessedUrl] = useState<string>();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); 
  const handleUpload = async (file: File) => {
    setOriginalUrl(URL.createObjectURL(file));
    setProcessedUrl(undefined);
    setLoading(true);
    setStatus("🔄 Processando imagem...");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/processar-imagem/", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Erro ao processar imagem");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setProcessedUrl(url);
      setStatus("✅ Imagem processada com sucesso!");
    } catch (e) {
      setStatus("❌ Erro no processamento");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-4 py-10">
      <h1 className="text-3xl font-bold text-pink-400 mb-10 flex items-center gap-2">
        🧠 Detector de Texto em Redações
      </h1>

      <UploadSection onUpload={handleUpload} loading={loading} />
      <StatusMessage status={status} />
      <ImagePreview originalUrl={originalUrl} processedUrl={processedUrl} />
    </main>
  );
}
