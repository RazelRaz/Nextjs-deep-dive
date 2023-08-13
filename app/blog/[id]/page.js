import getSinglePost from "@/lib/getSinglePost";

export default async function SingleBlog({params}){
    const id = params.id;
    const post = await getSinglePost(id);
    return (
        <div>
            <h6>{post.title}</h6>
            <p>{post.body}</p>
        </div>
    );
}