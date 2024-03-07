import { createStore } from "redux";

const INITIAL_STATE = {
    todoItems: [],
    darkMode: false,
}
const TodoReducer = (state = INITIAL_STATE, action) => {

    if (action.type === "ADD_ITEM") {
        return {
            ...state,
            todoItems: [...state.todoItems,
            { name: action.payload.itemName, date: action.payload.itemDate }]
        };

    } else if (action.type === "DELETE_ITEM") {
        return {
            ...state,
            todoItems: state.todoItems.filter((item) => item.name !== action.payload.itemName)
        };
    } else if (action.type === "TOGGLE_THEME") {
        return {
            ...state,
            darkMode: !state.darkMode
        };
    }
    return state;
}

const TodoStore = createStore(TodoReducer);
export default TodoStore;