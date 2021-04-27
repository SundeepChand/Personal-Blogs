import Image from "next/image";

export default function Post({ post }) {
  return (
    <div>
      <Image src={post.imgUrl} width={200} height={300} layout="fixed" />
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.date}</p>
      <p>{post.author}</p>
    </div>
  );
}
