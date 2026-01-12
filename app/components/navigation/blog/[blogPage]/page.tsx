import { Footer } from "@/app/components/shared/footer";

interface BlogPageInterface {
  params: { blogPage: string };
}

export default async function BlogPage({ params }: BlogPageInterface) {
  const { blogPage } = await params;
  return (
    <div className="bg-[#f3f3f3] flex  flex-col text-center gap-4 h-dvh ">
      <div className="text-5xl not-md:text-3xl">
        {blogPage === "1"
          ? "Conducting in-depth research and useability testing"
          : blogPage === "2"
          ? "Designing cohesive strategies and visual identities"
          : blogPage === "3"
          ? "Providing expert advice and strategic guidance"
          : "Blog Not Found"}
      </div>
      <Footer/>
    </div>
  );
}
