import BoardView from "./components/Board";

function App() {
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>2048</h1>

      <BoardView />
      <bold style={{ color: "white", textAlign: "left" }}>
        How to play:
        <p
          style={{
            color: "white",
            textAlign: "left",
            width: "440px",
            fontSize: "12px",
          }}
        >
        
          Use your arrow keys to move the tiles. Tiles with the same number
          merge into one when they touch. Add them up to reach 2048!
        </p>
      </bold>
    </>
  );
}

export default App;
