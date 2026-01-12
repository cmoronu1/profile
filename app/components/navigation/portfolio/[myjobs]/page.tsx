import { Footer } from "@/app/components/shared/footer";

interface MyJobsPageInterface {
  params: { myjobs: string };
}
export default async function MyJobsPage({ params }: MyJobsPageInterface) {
  const { myjobs } = await params;
  return (
    <div className="h-dvh">
      <h1>My Jobs Page: {myjobs}</h1>
      <Footer/>
    </div>
  );
}
