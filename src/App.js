import "./App.css";
import ColorList from "./components/ColorList";
import ColorProvider from "./data/ColorProvider";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddColor from "./components/AddColor";
import LinkButton from "./components/LinkButton";

function App() {
  return (
    <ColorProvider>
      <div className="App">
        <header className="App-header">
          <h1>React Context</h1>
        </header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addcolor" element={<AddColor />} />
            <Route path="*" element={<NOTFOUND404 />} />
          </Routes>
        </BrowserRouter>
        <footer>
          <p>Created with React.js and React Context</p>
        </footer>
      </div>
    </ColorProvider>
  );
}

export default App;

function Home() {
  return (
    <main>
      <h2>Color Rating</h2>
      <LinkButton to="/addcolor" type="add" />
      <ColorList />
    </main>
  );
}

function NOTFOUND404() {
  return (
    <main>
      <h2>404 Error, reaource not found.</h2>
    </main>
  );
}
