import Link from "next/link";
import { cn } from "@/lib/utils";

interface SubNavProps {
  links: { name: string; href: string }[];
  hash: string;
  handleLinkClick: (
    href: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

export function SubNav({ links, hash, handleLinkClick }: SubNavProps) {
  return (
    <div className="fixed w-30 right-0 top-1/2 pr-3 transform -translate-y-1/2 flex flex-col justify-center space-y-1">
      {links.map((link) => (
        <div key={link.name} className="flex justify-end group">
          <div className="hidden text-tiny text-foreground/75 group-hover:block">
            {link.name}
          </div>
          <Link
            href={link.href}
            className="w-4 h-4 flex justify-center items-center cursor-pointer"
            onClick={(e) => handleLinkClick(link.href, e)}
          >
            <div
              className={cn(
                " bg-foreground/80 rounded-full transition-all duration-100 ",
                {
                  "w-2.5 h-2.5": hash === link.href,
                  "w-1 h-1 group-hover:w-2 group-hover:h-2": hash !== link.href,
                }
              )}
            ></div>
          </Link>
        </div>
      ))}
    </div>
  );
}
