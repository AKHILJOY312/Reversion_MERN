import { ContextProvider } from "./Context";
import Counter from "./Counter";
function App() {
  return (
    <div>
      <ContextProvider>
        <Counter></Counter>
      </ContextProvider>
    </div>
  );
}
export default App;
