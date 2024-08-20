import { cn } from "@/lib/utils";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

// src/components/section-about/stacks.tsx

export function StackSeleton() {
  // 배열 길이를 지정하고 각 요소에 대해 스켈레톤을 생성
  const createSkeletons = (count: number) =>
    Array.from({ length: count }, (_, index) => (
      <div
        key={index}
        className="flex justify-center items-center font-medium p-2 m-2 text-center text-xs rounded-lg bg-foreground/10 text-foreground/75"
      >
        <Skeleton className="w-16 h-4" />
      </div>
    ));
  return (
    <>
      <div>
        <div className="flex items-center">
          {/* <h3 className="inline font-bold text-foreground/80 text-xl pl-12 tracking-tighter md:text-2xl">
          <Skeleton className="w-24 h-8" />
        </h3>
        <button className="text-[10px] ml-3 px-2 py-1 bg-foreground/10 rounded-2xl md:text-xs sm:text-xs">
          <Skeleton className="w-16 h-4" />
        </button> */}
        </div>

        <div className="flex flex-row justify-between">
          {/* 왼쪽 스킬 */}
          <div className="flex flex-col w-60 m-10">
            <Skeleton className="pl-2 mt-4">
              <Skeleton className="w-32 h-6" />
            </Skeleton>
            <div className="flex flex-wrap mt-5">{createSkeletons(6)}</div>
          </div>

          {/* 이미지 */}
          <div className="hidden items-center my-5 md:flex">
            <Skeleton className="rounded-full w-56 h-56" />
          </div>

          {/* 오른쪽 스킬 */}
          <div className="flex flex-col w-60 m-10">
            <Skeleton className="pl-2 mt-4">
              <Skeleton className="w-32 h-6" />
            </Skeleton>
            <div className="flex flex-wrap mt-5">{createSkeletons(6)}</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-5 md:hidden">
        <Skeleton className="rounded-full w-56 h-56" />
      </div>
    </>
  );
}
