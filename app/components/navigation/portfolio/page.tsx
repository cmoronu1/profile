"use client";
import { ArrowRight, ArrowUpRight, Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const [display, setDisplay] = useState({ 1: true, 2: true, 3: true });

  return (
    <div className="bg-[#f3f3f3] flex  flex-col items-center gap-4 h-dvh">
      <div className="flex items-center border rounded-3xl bg-[white] h-7 w-30 mt-20">
        <Dot size={40} />
        <span>Portfolio</span>
      </div>
      <h1 className="text-5xl">Latest Works</h1>
      <div className="grid grid-cols-3 not-md:grid-cols-1 w-full px-10 gap-4 pt-5">
        {[1, 2, 3].map((member) => (
          <div
            key={member}
            onMouseOver={
              member == 1
                ? () => setDisplay({  1: false, 2: true, 3: true })
                : member == 2
                ? () => setDisplay({  1: true, 2: false, 3: true })
                : () => setDisplay({ 1: true, 2: true, 3: false })
            }
            onMouseLeave={() => setDisplay({ 1: true, 2: true, 3: true })}
            className="flex flex-col gap-4"
          >
            <div className="relative z-0 h-70 flex  items-end  px-4 pb-4 text-sm">
              <Link href={`/components/navigation/portfolio/${member}`}>
                <Image
                  src={`/images/image${member}.jpg`}
                  alt={`Portfolio Image ${member}`}
                  fill
                  className="object-cover z-[-1] rounded-2xl"
                />
              </Link>
              <div className="flex justify-between w-full">
                <span
                  hidden={
                    member == 1
                      ? display[1]
                      : member == 2
                      ? display[2]
                      : display[3]
                  }
                >
                  Website
                </span>
                <span
                  hidden={
                    member == 1
                      ? display[1]
                      : member == 2
                      ? display[2]
                      : display[3]
                  }
                >
                  halodigital.xyz
                </span>
              </div>
              <div
                hidden={
                  member == 1
                    ? display[1]
                    : member == 2
                    ? display[2]
                    : display[3]
                }
                className="border bg-[black] rounded-[50%] border-[black] h-15 w-15 flex items-center justify-center absolute top-[40%] left-[45%]"
              >
                <ArrowUpRight size={30} color="white" />
              </div>
            </div>
            <span className="text-sm">Halo Digital Agency Website</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-sm pt-10 w-[15%]">
        <span className="text-[#808080]">Check out more</span>
        <div className="flex gap-2 items-center">
          <span>
            <ArrowRight size={20} />
          </span>
          <span className="text-[#202020]">View More</span>
        </div>
      </div>
    </div>
  );
}
