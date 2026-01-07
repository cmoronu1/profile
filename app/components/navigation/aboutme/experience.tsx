import { Button } from "@/components/ui/button";
import { ArrowUpRight, Dot } from "lucide-react";

export function Experience() {
  return (
    <div className="text-[#80807e] bg-[#fdfdfd] pt-7">
      <div className="grid grid-cols-2">
        <div className="text-[#4d4d4d] flex flex-col gap-2">
          <div className="flex  items-center gap-1 pl-2">
            <span className="rounded-[50%] border h-1.5 w-1.5 bg-[#2c2c2c]"></span>
            <span className="text-[0.7em]">Experiences</span>
          </div>
          <p className="text-[2em]">Explore my design Journey</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>
            Over the past 4+ years, I've had the opportunity to work on a wide
            range of design projects, collaborating with diverse teams and
            clients to bring creative visions to life.
          </p>
          <div className="flex items-center gap-1 text-[#575757]">
            <span className="underline">Book a call</span>
            <ArrowUpRight />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-10">
        <div>
          <h1 className="text-[#2e2e2e]">Creative Minds, New York, USA</h1>
          <div className="flex">
            <Dot /> <span>February 2022 - Present</span>
          </div>
        </div>
        <p>Innovated Designs, New York, Senior Product Designer</p>
        <div>
          <Button variant="outline">UI|UX</Button>
        </div>
      </div>
    </div>
  );
}
