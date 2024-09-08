interface SuccessMessageProps {
  show: boolean;
}

export function SuccessMessage({ show }: SuccessMessageProps) {
  if (!show) return null;

  return (
    <div className="absolute inset-0 flex items-end justify-cente">
      <h1 className="p-5 text-sm md:text-base text-blue-900 dark:text-blue-400">
        ✏︎ 소중한 의견 감사합니다.
      </h1>
    </div>
  );
}
