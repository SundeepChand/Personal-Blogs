import Post from "./Post";

export default function PostLayout({ posts }) {
  return (
    <div>
      <h1>Home</h1>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}
