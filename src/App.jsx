import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import Users from "./user";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("button click");
  }

  const handleClick2 = () => {
    alert("click 2");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>React Core Concepts </h3>

      <Friends></Friends>
      <Users></Users>

      <Team></Team>
      
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click two</button>
      <button
        onClick={() => {
          alert("third button click");
        }}
      >
        Click third
      </button>
      {/* vejaillaa */}
      <button onClick={()=>addToFive(3)}>Four Click</button>
    </>
  );
}

export default App;
