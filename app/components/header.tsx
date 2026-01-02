import { ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-8">
        <span>About Me</span>
        <span>Portfolio</span>
        <span>Services</span>
        <span>Blog</span>
      </div>
      <div className="flex items-center">
        <span className=" underline">Book a Call</span>
        <ArrowUpRight />
      </div>
    </div>
  );
}
