import { useSelector, useDispatch } from "react-redux";
import { remove, complete } from "../redux/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function TodoList() {
  const todolist = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const trash = <FontAwesomeIcon icon={faTrashCan} />;

  console.log(todolist);

  const todolistView = todolist.map((todo, idx) => (
    <li key={todolist[idx].id} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginRight: "150px" }}>
        <input type="checkbox" onChange={() => dispatch(complete(todolist[idx].id))} />
        <div>{todo.complete === false ? <>{todo.text}</> : <del>{todo.text}</del>}</div>
      </div>
      <button type="button" onClick={() => dispatch(remove(todolist[idx].id))}>
        {trash}
      </button>
    </li>
  ));

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <ul>{todolistView}</ul>
    </div>
  );
}
