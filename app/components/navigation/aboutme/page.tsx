import { Earth, Redo, Sparkle } from "lucide-react";
import { GSSP_COMPONENT_MEMBER_ERROR } from "next/dist/lib/constants";
import Image from "next/image";
import { Experience } from "./experience";

export default function AboutMe() {
  return (
    <div className="pt-5 px-16 bg-[white]">
      <div className=" bg-[#f3f3f3] grid grid-cols-3 m-auto pt-3 px-3 ">
        <div className="flex flex-col gap-2 justify-between">
          <h1 className="text-[black] text-3xl">About Me</h1>
          <p className="text-[#7f7f7f]">
            I specialize in turning complex problems into elegant solutions. My
            approach blends creativity with strategic thinking to deliver
            designs that not only look great but work seemlessly. Ready to start
            your next project?
          </p>
          <Redo size={350} color="#e8e8e8" />
        </div>
        <div className="bg-[white] rounded-xl w-[50%] flex flex-col gap-2 justify-between pl-3 py-2 m-auto">
          <div className="relative border rounded-[50%] h-12 w-12 flex items-center justify-center bg-[black]">
            <div className="absolute top-px border rounded-[50%] h-12 w-12 flex items-center justify-center bg-[#f7f7f7]">
              <Earth size={28} color="#2c2c2c" />
            </div>
          </div>
          <span className="text-5xl text-[black]">120%</span>
          <p className="text-[#797979] max-w-[90%]">
            Average increase in client engagement in the first 6 months
          </p>
          <div className="bg-[#a3a3a3] w-[95%] h-[17em] rounded-xl">
            <Image
              src="/images/myPicture.png"
              alt="About Me Photo"
              width={220}
              height={160}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 pb-15">
          <div className="bg-[#808080] w-[40%] m-auto mt-0 rounded-xl">
            <Image
              src="/images/myPicture2.png"
              alt="About Me Photo"
              width={200}
              height={180}
              className="rounded-xl"
            />
          </div>

          {[1, 2].map((member) => (
            <div key={member} className="flex gap-2">
              <div className="border rounded-[50%] h-8 w-8 flex items-center justify-center bg-[black]">
                <Sparkle size={15} strokeWidth={1} fill="white" />
              </div>
              <p className="text-[#7e7e7e] max-w-[90%]">
                {member === 1
                  ? `With 4+ years of experience, I specialize in creating intuitive,
            user-focused designs that solve real-world problems and deliver
            seamless digital experiences.`
                  : `I thrive on working closely with clients,blending creativity with strategy to bring their vision to life through thoughtful,impactful design solutions`}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Experience />
    </div>
  );
}
