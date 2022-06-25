import ObjectRenderer from "./components/ObjectRenderer";

function App() {
  return (
    <div style={{ padding: "16px" }}>
      <div style={{ paddingLeft: "16px", fontFamily: "monospace" }}>
        <ObjectRenderer data={data} />
      </div>
    </div>
  );
}

export default App;

const data = {
  null: null,
  undefined: undefined,
  boolean: false,
  id: "0001",
  type: "donut",
  name: "Cake",
  ppu: 0.55,
  colors: ["red", "blue", "yellow", { id: "1", type: "green" }],
  batters: {
    batter: [
      { id: "1001", type: "Regular" },
      { id: "1002", type: "Chocolate" },
      { id: "1003", type: "Blueberry" },
      { id: "1004", type: "Devil's Food" },
    ],
  },
  topping: [
    { id: "5001", type: "None" },
    { id: "5002", type: "Glazed" },
    { id: "5005", type: "Sugar" },
    { id: "5007", type: "Powdered Sugar" },
    { id: "5006", type: "Chocolate with Sprinkles" },
    { id: "5003", type: "Chocolate" },
    { id: "5004", type: "Maple" },
  ],
};
