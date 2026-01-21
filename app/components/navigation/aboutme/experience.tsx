"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, Dot } from "lucide-react";
import { useState } from "react";

export function Experience() {
  const [buttons, setButtons] = useState({
    1: "bg-[#eaeaea]  text-[#515151]",
    2: "bg-[#eaeaea]  text-[#515151]",
    3: "bg-[#eaeaea]  text-[#515151]",
    4: "bg-[#eaeaea]  text-[#515151]",
    5: "bg-[#eaeaea]  text-[#515151]",
  });
  return (
    <div className="text-[#80807e] bg-[#fdfdfd] pt-7 w-[95%] m-auto">
      <div className="grid grid-cols-2 not-md:grid-cols-1">
        <div className="text-[#4d4d4d] flex flex-col gap-2">
          <div className="flex  items-center gap-1 pl-2">
            <span className="rounded-[50%] border h-1.5 w-1.5 bg-[#2c2c2c]"></span>
            <span className="text-[0.7em]">Experiences</span>
          </div>
          <p className="text-[2em] not-md:text-center">
            Explore my design Journey
          </p>
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
      <div className="mt-15">
        {[
          "Creative Minds, New York, USA",
          "Innovative Designs Inc, USA",
          "Visionary Creations Ltd, UK",
          "FutureTech, Berlin, Germany",
          "Expert Designs Inc, USA",
        ].map((company, index) => (
          <div
            key={index}
            className="grid grid-cols-3 not-md:grid-cols-1 mt-5 text-[0.9em] border-b md:gap-8 lg:gap-0"
          >
            <div className="flex flex-col">
              <h1 className="text-[#2e2e2e] text-xl">{company}</h1>
              <div className="flex">
                <Dot />
                <span>
                  {company == "Innovative Designs Inc, USA"
                    ? "January 2020 - February 2022"
                    : "February 2022 - Present"}
                </span>
              </div>
            </div>

            <p>
              {company == "Innovative Designs Inc, USA"
                ? buttons[1] == "text-[white] bg-[black]"
                  ? "From Crafting seamless user experiences to leading strategic product design initiatives, each experience has shaped my approach and strengthened my passion for solving design challenges."
                  : "Led UX/UI, San Francisco. Crafting tomorrow's experiences."
                : company == "Visionary Creations Ltd, UK"
                ? buttons[2] == "text-[white] bg-[black]"
                  ? "From Crafting seamless user experiences to leading strategic product design initiatives, each experience has shaped my approach and strengthened my passion for solving design challenges."
                  : "Principal Designer, Berlin, Crafting tomorrow's experiences."
                : company == "FutureTech, Berlin, Germany"
                ? buttons[3] == "text-[white] bg-[black]"
                  ? "From Crafting seamless user experiences to leading strategic product design initiatives, each experience has shaped my approach and strengthened my passion for solving design challenges."
                  : "Principal Designer, Berlin, Crafting tomorrow's experiences."
                : company == "Creative Minds, New York, USA"
                ? buttons[5] == "text-[white] bg-[black]"
                  ? "From Crafting seamless user experiences to leading strategic product design initiatives, each experience has shaped my approach and strengthened my passion for solving design challenges."
                  : "Innovated Designs, New York, Senior Product Designer"
                : buttons[4] == "text-[white] bg-[black]"
                ? "From Crafting seamless user experiences to leading strategic product design initiatives, each experience has shaped my approach and strengthened my passion for solving design challenges."
                : "Innovated Designs, New York, Senior Product Designer"}
            </p>
            <div className="flex gap-2 justify-end">
              {["UIUX", "Branding"].map((tag, idx) => (
                <Button
                  key={idx}
                  className={
                    "h-7 rounded-2xl border border-[#e0e0de] text-[0.8em] " +
                    (tag == "UIUX" ? "w-15 " : "w-20 ") +
                    (index == 1
                      ? buttons[1]
                      : index == 2
                      ? buttons[2]
                      : index == 3
                      ? buttons[3]
                      : index == 4
                      ? buttons[4]
                      : buttons[5])
                    // (company == "FutureTech, Berlin, Germany"
                    //   ? "text-[white] bg-[black]"
                    //   : "bg-[#eaeaea]  text-[#515151] ")
                  }
                  variant="outline"
                  onClick={
                    index == 1
                      ? () =>
                          setButtons({
                            1: "text-[white] bg-[black]",
                            2: "bg-[#eaeaea]  text-[#515151]",
                            3: "bg-[#eaeaea]  text-[#515151]",
                            4: "bg-[#eaeaea]  text-[#515151]",
                            5: "bg-[#eaeaea]  text-[#515151]",
                          })
                      : index == 2
                      ? () =>
                          setButtons({
                            2: "text-[white] bg-[black]",
                            1: "bg-[#eaeaea]  text-[#515151]",
                            3: "bg-[#eaeaea]  text-[#515151]",
                            4: "bg-[#eaeaea]  text-[#515151]",
                            5: "bg-[#eaeaea]  text-[#515151]",
                          })
                      : index == 3
                      ? () =>
                          setButtons({
                            3: "text-[white] bg-[black]",
                            2: "bg-[#eaeaea]  text-[#515151]",
                            1: "bg-[#eaeaea]  text-[#515151]",
                            4: "bg-[#eaeaea]  text-[#515151]",
                            5: "bg-[#eaeaea]  text-[#515151]",
                          })
                      : index == 4
                      ? () =>
                          setButtons({
                            4: "text-[white] bg-[black]",
                            2: "bg-[#eaeaea]  text-[#515151]",
                            3: "bg-[#eaeaea]  text-[#515151]",
                            1: "bg-[#eaeaea]  text-[#515151]",
                            5: "bg-[#eaeaea]  text-[#515151]",
                          })
                      : () =>
                          setButtons({
                            5: "text-[white] bg-[black]",
                            2: "bg-[#eaeaea]  text-[#515151]",
                            3: "bg-[#eaeaea]  text-[#515151]",
                            4: "bg-[#eaeaea]  text-[#515151]",
                            1: "bg-[#eaeaea]  text-[#515151]",
                          })
                  }
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
