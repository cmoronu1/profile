import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-8">
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
