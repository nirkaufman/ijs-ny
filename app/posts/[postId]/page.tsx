
async function fetchPostById(id: any) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
}

async function fetchCommentsByPostId(id: any) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return response.json();
}


export default async function Post({params: postId }: any) {
  const post = await fetchPostById(postId);
  const postComments = await fetchCommentsByPostId(postId);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Comments</h2>
      <ul>
        {postComments.map((comment: any) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  )

}
