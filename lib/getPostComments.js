export default async function getPostComments(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        cache: 'no-store'
    });


    if(!res.ok) {
        throw new Error("Error fetching single post comments")
    }

    return res.json();

}