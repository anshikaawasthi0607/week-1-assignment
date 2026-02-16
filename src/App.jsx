import Accordion from "./Components/Accordion/Accordion";
import { accordionData } from "./Data/data";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">
        ✨ Infinite Nested Accordion ✨
      </h1>
      <p className="app-subtitle">
        Explore the infinite levels of nested content below
      </p>
      <Accordion data={accordionData} />
    </div>
  );
}

export default App;
