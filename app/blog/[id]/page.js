import getAllPosts from "@/lib/getAllPosts";
import getPostComments from "@/lib/getPostComments";
import getSinglePost from "@/lib/getSinglePost";

export default async function SingleBlog({params}){
    const id = params.id;
    const postpromise =  getSinglePost(id);
    const commentspromise =  getPostComments(id)

    // request in parallel
    const [post, comments] = await Promise.all([postpromise, commentspromise]);

    //incremental Data fetching
    

    return (
        <div>
            <h6>{post.title}</h6>
            <p>{post.body}</p>

            <div style={{marginTop:'60px'}}>
                <h4>Post Comments</h4>
                {
                    comments.map(comment => {
                        return (
                            <p key={comment.id}>{comment.body}</p>
                        )
                    })
                }
            </div>
        </div>
    );
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const posts = await getAllPosts();
   
    return posts.map((post) => ({
      id: "" + post.id,
    }))
  }