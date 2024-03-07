import { createSlice } from "@reduxjs/toolkit"

const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoItems: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.todoItems.push({
                name: action.payload.itemName, date: action.payload.itemDate
            })

        },
        deleteItem: (state, action) => {
            const { itemName } = action.payload
            state.todoItems = state.todoItems.filter((item) => item.name !== itemName)
        }
    }
})

export const TodoActions = TodoSlice.actions;
export default TodoSlice;