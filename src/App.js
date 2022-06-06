import "./App.css";
import ColorProvider from "./data/ColorProvider";

function App() {
  return (
    <ColorProvider>
      <div className="App">
        <header className="App-header">
          <h1>React Context</h1>
        </header>
        <main>
          <h2>Color Rating</h2>
        </main>
      </div>
    </ColorProvider>
  );
}

export default App;
