import { useContext } from "react";
import { SnakeContext } from "./context";

function Header() {
  const { color } = useContext(SnakeContext);
  return (
    <header style={{ background: color }}>
      <h1>Snake</h1>
    </header>
  );
}

function Main() {
  const { name, fangs, speed } = useContext(SnakeContext);

  return (
    <main>
      <p>
        Name: <span>{name}</span>
      </p>
      <p>
        Venom:Fangs <span>{fangs} </span>
      </p>
      <p>
        Speed: <span>{speed}</span>
      </p>
    </main>
  );
}
export { Main, Header };
