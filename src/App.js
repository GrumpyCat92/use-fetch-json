import "./App.css";
import Example from "./Components/Example";

function App() {
  const urls = [
    "http://localhost:7070/data",
    "http://localhost:7070/error",
    "http://localhost:7070/loading",
  ];

  return (
    <div>
      {urls.map((i) => (
        <Example key={i} url={i} />
      ))}
    </div>
  );
}

export default App;
