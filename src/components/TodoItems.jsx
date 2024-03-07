import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoItems() {
  const todoItems = useSelector((state) => state.todo.todoItems);

  return (
    <div className=" flex justify-center items-center gap-10 mt-6 flex-col">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.date}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
}
