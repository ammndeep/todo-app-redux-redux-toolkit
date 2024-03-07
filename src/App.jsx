import { MdOutlineLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useDispatch, useSelector } from "react-redux";
import { DarkModeActions } from "./app/DarkModeSlice";

export default function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <>
      <div
        className={`min-h-screen ${darkMode && "bg-slate-900 text-slate-50"}`}
      >
        <div className="flex justify-center items-center gap-10">
          <h1 className="text-4xl font-medium m-3">TODO List</h1>
          <button onClick={() => dispatch(DarkModeActions.toggleTheme())}>
            {darkMode ? (
              <BsFillMoonStarsFill size={24} />
            ) : (
              <MdOutlineLightMode size={24} />
            )}
          </button>
        </div>
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </div>
    </>
  );
}
