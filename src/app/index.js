import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
import DarkModeSlice from "./DarkModeSlice";

const TodoStore = configureStore({
    reducer: {
        todo: TodoSlice.reducer,
        darkMode: DarkModeSlice.reducer,
    }
})

export default TodoStore;



