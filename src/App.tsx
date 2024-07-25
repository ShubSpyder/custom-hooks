import "./App.css";
import useCounter from "./custom-hooks/counter";

function App() {
  const [count, increment, decrement] = useCounter(0);

  return (
    <>
      <p>Count: {String(count)}</p>
      <br />
      <button onClick={() => increment()}>Increment</button> &nbsp;{" "}
      <button onClick={() => decrement()}>decrement</button>
    </>
  );
}

export default App;
