import React from 'react';
import { Loader2 } from "lucide-react";

export const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader2 className="animate-spin h-16 w-16 text-blue-500" />
    </div>
  );
};
