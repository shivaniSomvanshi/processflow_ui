import Card from "../src/Components/Card/Card";
import ArrowHeader from "../src/Components/ArrowHeader/Header";
import AddStep from "../src/Components/AddStep/AddStep";

function App() {
  return (
    <div style={{ padding: "30px" }} className="App">
      <h2>PROCESS FLOW</h2>
      <ArrowHeader />
      <Card />
      <AddStep />
    </div>
  );
}

export default App;
