import { Badge, BadgeVariant } from "@/components/ui/badge";

// 가능한 뱃지 스타일
const badgeVariants: BadgeVariant[] = [
  "badge1",
  "badge2",
  "badge3",
  "badge4",
  "badge5",
];

const BadgeList = ({ techStack }: { techStack: string[] }) => (
  <div className="flex gap-2 overflow-y-hidden scrollbar-hide">
    {techStack.map((tech, index) => (
      <Badge
        key={index}
        variant={badgeVariants[index % badgeVariants.length]} // 순서대로 스타일 적용
      >
        {tech}
      </Badge>
    ))}
  </div>
);

export default BadgeList;
