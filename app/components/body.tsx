import { Separator } from "@/components/ui/separator";
import { Minus, SeparatorHorizontal } from "lucide-react";
import Image from "next/image";

export function Body() {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col">
        <div className="flex gap-5 pl-4 mt-12">
          {["200", "50"].map((member) => (
            <div key={member} className="flex align-top gap-0.5">
              <span className="text-xl">+</span>
              <div className="flex flex-col">
                <span className="text-4xl">{member}</span>
                <span className="text-sm">
                  {member == "200" ? "Project completed" : "Startup raised"}
                </span>
              </div>
            </div>
          ))}
        </div>
        <span className="text-[15em]">Hello</span>
        <div className="flex items-center gap-1">
          <Minus />
          <span>It's D.Nova a design wizard</span>
        </div>
      </div>
      <Image
        src={"/images/myPicture2.png"}
        alt="my picture"
        height={400}
        width={700}
      />
    </div>
  );
}
