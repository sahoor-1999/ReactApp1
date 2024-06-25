import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
        <Navbar title="Text-Utils" aboutUs="About Us" home="Home" />
        <div className="container my-3">
          <TextForm header="Enter the text to analyze" />
        </div>
    </>
  );
}

export default App;
