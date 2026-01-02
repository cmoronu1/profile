import Image from "next/image";

export function Body() {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col justify-between pb-30">
        <div className="flex gap-5 pl-4 mt-12">
          {["1", "2"].map((member) => (
            <div key={member} className="flex align-top gap-0.5">
              <span className="text-xl">+</span>
              <div className="flex flex-col">
                <span className="text-4xl">{member == "1" ? 200 : 50}</span>
                <span className="text-sm">
                  {member == "1" ? "Project completed" : "Startup raised"}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-[#2c2c2c] flex flex-col">
          <span className="text-[15em] h-67">Hello</span>
          <div className="flex items-center gap-1">
            <hr className="w-4" />
            <span>It's D.Nova a design wizard</span>
          </div>
        </div>
      </div>
      <Image
        src={"/images/myPicture2.png"}
        alt="my picture"
        height={400}
        width={700}
        objectFit="cover"
      />
    </div>
  );
}
