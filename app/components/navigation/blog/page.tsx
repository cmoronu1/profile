import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="bg-[#f3f3f3] flex  flex-col items-center gap-4 h-dvh">
      <div className="flex items-center border rounded-3xl bg-[white] h-7 w-30 mt-20">
        <Dot size={40} />
        <span>Blogs</span>
      </div>
      <h1 className="text-5xl">Design Insights & Trends</h1>
      <div className="grid grid-cols-3 px-10 gap-4 pt-5">
        {[1, 2, 3].map((blog) => (
          <div
            key={blog}
            className="bg-[white]  relative rounded-2xl flex flex-col gap-4"
          >
            <Link href={`/components/navigation/blog/${blog}`}>
              <Image
                src={`/images/image${blog}.jpg`}
                alt={`Blog Image ${blog}`}
                width={400}
                height={300}
                className="rounded-2xl"
              />
            </Link>

            <div className="flex gap-2 items-center text-[0.9em] px-4">
              <Button className="text-[0.6em] h-5 rounded-2xl">
                MARKETING
              </Button>
              <span>5 min read</span>
            </div>
            <p className="text-[0.9em] px-4 pb-6">
              {blog == 1
                ? "Conducting in-depth research and useability testing"
                : blog == 2
                ? "Designing cohesive strategies and visual identities"
                : "Providing expert advice and strategic guidance"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
