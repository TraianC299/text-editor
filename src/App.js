import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import TextEditor from "./Components/TextEditor";

function App() {
  return <div className="flex">
    {/* <Sidebar></Sidebar> */}
    <div className="w-full pointer-events-stroke">
      <TextEditor></TextEditor>
    </div>
  </div>;
}

export default App;
