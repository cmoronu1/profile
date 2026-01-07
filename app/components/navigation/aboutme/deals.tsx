import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Deals() {
  return (
    <div className="relative mt-20 h-80 w-[95%] m-auto text-[black] flex flex-col items-center justify-center gap-3 z-0">
      <span>(Book your free consultation now!)</span>
      <h1 className="text-4xl">
        Exclusive Winter Deal Days Get a Free Consultation!
      </h1>
      <p>
        Take advantage of this limited-time offer to discuss your design needs
        with an experienced UI/UX and product designer
      </p>
      <div className="flex gap-1">
        <span className="underline">Let's talk</span>
        <ArrowUpRight />
      </div>
      <Image
        src="/images/niceBackground.jpg"
        alt="background image"
        fill
        className="rounded-2xl z-[-1]"
        objectFit="cover"
      />
    </div>
  );
}
