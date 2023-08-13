import getAllPosts from "@/lib/getAllPosts";

export default async function Blog(){
    
    const posts = await getAllPosts();

    return (
        <div>
            <h1>Blog Page - Server side rendering</h1>
            {
                posts.map(post => {
                    return (
                        <h2 key={post.id}> {post.title} </h2>
                    )
                })
            }
        </div>

    );
}