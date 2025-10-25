  import Display from "./components/Display";
  import Sidebar from "./components/Sidebar";

  function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Display />
      </div>
    </div>
  );
}
export default App;

