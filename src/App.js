import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
    </div>
  );
}

export default App;
