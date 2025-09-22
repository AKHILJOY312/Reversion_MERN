import { Header, Main } from "./child";
import { SnakeContext } from "./context";

function Jungle(props) {
  const snake = {
    name: "Black",
    fangs: "6.5",
    speed: "300",
    color: "green",
  };

  return (
    <SnakeContext.Provider value={snake}>
      <Header></Header>
      <Main></Main>
    </SnakeContext.Provider>
  );
}

export default Jungle;
