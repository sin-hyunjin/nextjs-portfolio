"use client"; //

import { useEffect } from "react";

// 에러 컴포넌트는 클라이언트 컴포넌트여야 함.
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
    <div>
      <h2>문제가 발생했습니다!</h2>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  );
}
