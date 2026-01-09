import { Separator } from "@/components/ui/separator";
import { Minus, SeparatorHorizontal } from "lucide-react";
import Image from "next/image";

export function Body() {
  return (
    <div className="grid grid-cols-2 not-md:flex not-md:flex-col items-center">
      <div className="flex flex-col not-md:items-center">
        <div className="flex gap-5 pl-4 not-md:pl-0 mt-12 not-md:mt-5">
          {["200", "50"].map((member) => (
            <div key={member} className="flex align-top gap-0.5">
              <span className="text-xl">+</span>
              <div className="flex flex-col">
                <span className="text-4xl not-md:text-xl">{member}</span>
                <span className="text-sm">
                  {member == "200" ? "Project completed" : "Startup raised"}
                </span>
              </div>
            </div>
          ))}
        </div>
        <span className="text-[#2b2b2b] text-6xl md:text-[11rem] lg:text-[15rem]">Hello</span>
        <div className="flex items-center gap-1">
          <Minus />
          <span>It's D.Nova a design wizard</span>
        </div>
      </div>
      <div className="relative w-full h-150 not-md:h-60 not-md:mt-10">
        <Image
          src={"/images/myPicture2.png"}
          alt="my picture"
          fill
          objectFit="contain"
          
        />
      </div>
    </div>
  );
}
