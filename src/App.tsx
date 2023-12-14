import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("clickled")} />
    </div>
  );
}
export default App;
