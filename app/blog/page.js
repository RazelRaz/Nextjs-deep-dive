import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function Blog(){
    
    const posts = await getAllPosts();

    return (
        <div>
            <h1>Blog Page - Server site rendering</h1>
            {
                posts.map(post => {
                    return (
                        <h2 key={post.id}> <Link href={`/blog/${post.id}`}>{post.title}</Link>  </h2>
                    )
                })
            }
        </div>

    );
}