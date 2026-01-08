

interface BlogPageInterface {
    params: {blogPage: string};
    }

export default async function BlogPage({params}:BlogPageInterface) {
   const {blogPage} = await params;
    return (
    <div className="text-[black]">
        Welcome to my Blog Page: {blogPage}
    </div>
    );

}