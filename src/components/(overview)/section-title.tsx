interface SectionTitleProps {
  title: string;
  description: string;
}

/** SectionTitle 컴포넌트
 * - 섹션 제목의 재사용성을 위해 만듬
 */
export const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <h1
      className={`font-bold text-foreground/80 text-5xl tracking-tighter md:text-7xl sm:text-6xl`}
    >
      {title}
      <p className="text-xs tracking-normal text-foreground/50 pl-1 md:text-base sm:text-sm">
        {description}
      </p>
    </h1>
  );
};
