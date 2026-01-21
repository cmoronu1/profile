import { Earth, Redo, Sparkle } from "lucide-react";
import { GSSP_COMPONENT_MEMBER_ERROR } from "next/dist/lib/constants";
import Image from "next/image";
import { Experience } from "./experience";
import { Deals } from "./deals";
import { Footer } from "../../shared/footer";

export default function AboutMe() {
  return (
    <div className="pt-5  bg-[white] not-md:px-3 md:px-5 lg:px-16">
      <div className=" bg-[#f3f3f3] grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:grid-cols-3 m-auto pt-3 px-3 ">
        <div className="flex flex-col gap-2 not-md:text-center">
          <h1 className="text-[black] text-3xl ">About Me</h1>
          <p className="text-[#7f7f7f]">
            I specialize in turning complex problems into elegant solutions. My
            approach blends creativity with strategic thinking to deliver
            designs that not only look great but work seemlessly. Ready to start
            your next project?
          </p>
          <Redo className="md:w-[90%]" size={350} color="#e8e8e8" />
        </div>
        <div className="bg-[white]  rounded-xl w-[50%]  lg:w-[50%] not-lg:w-full flex flex-col gap-2 justify-between  py-2 m-auto">
          <div className="relative border rounded-[50%] h-12 w-12 flex items-center justify-center bg-[black] ml-3">
            <div className="absolute top-[0.6px] border rounded-[50%] h-12 w-12 flex items-center justify-center bg-[#f7f7f7]">
              <Earth size={28} color="#2c2c2c" />
            </div>
          </div>
          <span className="text-5xl text-[black] pl-3">120%</span>
          <p className="text-[#797979] max-w-[90%] pl-3">
            Average increase in client engagement in the first 6 months
          </p>
          <div className="bg-[#a3a3a3] relative w-[65%] md:w-[75%] lg:w-[95%] m-auto md:h-[19em] lg:h-[16em] h-[16em] rounded-xl">
            <Image
              src="/images/myPicture.png"
              alt="About Me Photo"
              fill
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 pb-15 md:col-span-2 lg:col-span-1 not-md:mt-10">
          <div className="bg-[#808080] w-[40%] m-auto mt-0 rounded-xl relative h-40 lg:h-40 md:h-60">
            <Image
              src="/images/myPicture2.png"
              alt="About Me Photo"
              fill
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
      <Deals />
      <Footer />
    </div>
  );
}
