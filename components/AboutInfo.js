export default function AboutInfo({ user }) {
  return (
    <div>
      <p>{user.Name}</p>
      <p>{user.Description}</p>
    </div>
  );
}
