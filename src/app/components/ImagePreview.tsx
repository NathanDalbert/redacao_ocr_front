import React from "react";

interface Props {
  originalUrl?: string;
  processedUrl?: string;
}

export default function ImagePreview({ originalUrl, processedUrl }: Props) {
  const containerStyle =
    "flex-1 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-lg";

  const imageStyle =
    "rounded-lg border border-gray-700 shadow-md max-w-full max-h-[500px] object-contain";

  return (
    <div className="flex flex-col md:flex-row gap-6 my-10 w-full max-w-6xl">
      {originalUrl && (
        <div className={containerStyle}>
          <h3 className="font-semibold text-pink-400 mb-3 text-center">
            Imagem Original
          </h3>
          <img src={originalUrl} alt="Imagem original" className={imageStyle} />
        </div>
      )}
      {processedUrl && (
        <div className={containerStyle}>
          <h3 className="font-semibold text-pink-400 mb-3 text-center">
            Imagem Processada
          </h3>
          <img src={processedUrl} alt="Imagem processada" className={imageStyle} />
        </div>
      )}
    </div>
  );
}
