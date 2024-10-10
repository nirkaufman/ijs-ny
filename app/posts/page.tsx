import Link from "next/link";

async function loadPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}


export default async function Posts() {
  const posts = await loadPosts();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <li>{post.title}</li>
            </Link>
        ))}
      </ul>
    </div>
  )
}
