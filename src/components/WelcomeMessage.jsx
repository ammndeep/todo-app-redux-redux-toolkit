import { useSelector } from "react-redux";

export default function WelcomeMessage() {
  const todoItems = useSelector((state) => state.todoItems);
  return (
    todoItems.length === 0 && (
      <h1 className="text-5xl p-4 m-4 text-center font-medium">
        Enjoy your Day...!
      </h1>
    )
  );
}
