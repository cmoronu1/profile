import { Earth, Redo, Sparkle } from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className=" h-dvh bg-[#f3f3f3]">
      <div className="w-[90%] grid grid-cols-3 m-auto pt-5">
        <div className="flex flex-col gap-2 justify-between">
          <h1 className="text-[black] text-3xl">About Me</h1>
          <p className="text-[#7f7f7f] max-w-[90%]">
            I specialize in turning complex problems into elegant solutions. My
            apporach belends creativity with strategic thinking to deliver
            designs that not only look great but work seemlessly. Ready to start
            your next project?
          </p>
          <Redo size={350} color="#e8e8e8" />
        </div>
        <div className="bg-[white] rounded-xl max-w-[60%] flex flex-col gap-2 justify-between pl-3 py-2">
          <div className="relative border rounded-[50%] h-12 w-12 flex items-center justify-center bg-[black]">
            <div className="absolute top-px border rounded-[50%] h-12 w-12 flex items-center justify-center bg-[#f7f7f7]">
              <Earth size={28} color="#2c2c2c" />
            </div>
          </div>
          <span className="text-5xl text-[black]">120%</span>
          <p className="text-[#797979] max-w-[90%]">
            Average increase in client engagement in the first 6 months
          </p>
          <div className="bg-[#a3a3a3] w-[95%] rounded-xl">
            <Image
              src="/images/myPicture.png"
              alt="About Me Photo"
              width={250}
              height={200}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-[#808080] w-[30%] rounded-xl">
            <Image
              src="/images/myPicture2.png"
              alt="About Me Photo"
              width={180}
              height={160}
              className="rounded-xl"
            />
          </div>
          {
        [1, 2].map((member) => (
          <>
           <div key={member} className="border rounded-[50%] h-8 w-8 flex items-center justify-center bg-[black]">
            <Sparkle size={15} strokeWidth={1} fill="white" />
          </div>
          <p className="text-[#7e7e7e]">{member === 1 ?`With 4+years of experience, I speacialze in creating intuitive,
            user-focused designs that solve real-world problems and deliver
            seamless digital experiences.`:`I thrive on working closely with clients`}
            
          </p>
          </>
         
))}
        </div>
      </div>
    </div>
  );
}
