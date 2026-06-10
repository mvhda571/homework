import ClickCounter from "./components/ClickCounter";
import FormLogger from "./components/FormLogger";
import ItemList from "./components/ItemList";
import HoverHighlight from "./components/HoverHighlight";
import EnterInput from "./components/EnterInput";

function App() {
  return (
    <div>
      <ClickCounter />
      <hr />

      <FormLogger />
      <hr />

      <ItemList />
      <hr />

      <HoverHighlight />
      <hr />

      <EnterInput />
    </div>
  );
}

export default App;