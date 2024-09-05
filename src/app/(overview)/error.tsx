"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold  mb-4">문제가 발생했습니다!</h2>
        <p className="text-gray-600 mb-6">잠시 후 다시 시도해 주세요.</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-foreground/70 text-white font-semibold rounded-lg hover:bg-foreground focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}
