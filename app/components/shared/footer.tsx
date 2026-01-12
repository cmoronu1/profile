import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <div className="w-full bg-[#eeeeee] text-center flex flex-col gap-3 items-center rounded-t-2xl mt-5 h-full">
      <h1 className="text-4xl not-md:text-2xl">Got a Vision? Let's Bring It To Life!</h1>
      <p className="md:px-5">
        I'm always excited to collaborate on new and innovative projects.
        Whether you're starting from scratch or refining an existing idea
      </p>
      <div className="flex items-center gap-2 pt-5">
        <span className="underline">Book a call</span>
        <ArrowUpRight size={16} />
      </div>
      <div className="bg-[#222222] w-full h-full flex flex-col justify-center">
        <div className="flex justify-between items-center text-white lg:px-20 not-lg:px-5 not-md:flex-col">
          <div className="flex lg:gap-8  not-lg:gap-4 not-md:text-sm">
            {["Home", "About Me", "Portfolio", "Services", "Blog"].map(
              (member) => (
                <Link className="rounded-xl hover:bg-[#2b2b2b]  transition"
                  key={member}
                  href={member == "Home" ? "/" : `/components/navigation/${member
                    .toLowerCase()
                    .replace(" ", "")}`}
                >
                  {member}
                </Link>
              )
            )}
          </div>
          <span className="lg:text-6xl not-md:text-2xl md:text-4xl ">hello@dnova.com</span>
        </div>
      </div>
    </div>
  );
}
