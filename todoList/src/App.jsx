import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "300px",
          width: "50%",
        }}
      >
        <InputTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
