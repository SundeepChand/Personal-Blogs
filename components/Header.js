export default function Header({ pattern }) {
  return (
    <header
      style={{
        ...pattern,
        width: "100%",
        height: "290px",
        position: "absolute",
        top: "0",
        zIndex: "-1",
      }}
    ></header>
  );
}
