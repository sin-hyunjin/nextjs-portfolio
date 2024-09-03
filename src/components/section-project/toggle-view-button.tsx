import { BetweenHorizontalEnd, BetweenHorizontalStart } from "lucide-react";

interface ToggleViewButtonProps {
  collet: boolean;
  onClick: () => void;
}

export function ToggleViewButton({ collet, onClick }: ToggleViewButtonProps) {
  return (
    <div className="mr-10 w-full flex justify-end group" onClick={onClick}>
      <div className="mr-2 flex items-end text-[11px] md:text-[12px] text-foreground/80 leading-relaxed cursor-pointer">
        <div className="group-hover:text-foreground border-x-2 border-foreground/10 p-1">
          {collet ? "전체 보기" : "간단히 보기"}
        </div>
      </div>
      <button className="border border-foreground/20 group-hover:border-foreground/40 p-1 rounded-md">
        {collet ? (
          <BetweenHorizontalStart className="stroke-foreground/50 group-hover:stroke-foreground" />
        ) : (
          <BetweenHorizontalEnd className="stroke-foreground/50 group-hover:stroke-foreground" />
        )}
      </button>
    </div>
  );
}
