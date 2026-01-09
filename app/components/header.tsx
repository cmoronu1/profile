import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex justify-between not-md:flex-col not-md:gap-2">
      <div className="flex gap-8 not-md:flex-col not-md:gap-2">
        {
          ["About Me", "Portfolio", "Services", "Blog"].map(
            (member) => (
              <Link key={member} href={`/components/navigation/${member.toLowerCase().replace(" ", "")}`}>
                {member}
              </Link>
            )
          )
        }
      </div>
      <div className="flex items-center">
        <span className="underline">Book a Call</span>
        <ArrowUpRight />
      </div>
    </div>
  );
}
