import React from "react";

interface Props {
    status: string;
  }
  
  export default function StatusMessage({ status }: Props) {
    if (!status) return null;
  
    return (
      <div className="flex items-center gap-2 text-pink-400 text-sm my-4">
        {status.includes("Erro") ? "❌" : "✅"} {status}
      </div>
    );
    
  }
  