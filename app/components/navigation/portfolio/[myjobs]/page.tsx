interface MyJobsPageInterface {
  params: { myjobs: string };
}
export default async function MyJobsPage({ params }: MyJobsPageInterface) {
  const { myjobs } = await params;
  return (
    <div>
      <h1>My Jobs Page: {myjobs}</h1>
    </div>
  );
}
