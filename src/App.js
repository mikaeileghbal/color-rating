import "./App.css";
import ColorProvider from "./data/ColorProvider";

function App() {
  return (
    <ColorProvider>
      <div className="App">
        <header className="App-header">
          <h1>React Context</h1>
        </header>
      </div>
    </ColorProvider>
  );
}

export default App;
