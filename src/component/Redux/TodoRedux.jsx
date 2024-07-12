import { createSlice } from "@reduxjs/toolkit"




const TodoList = createSlice({
    name : 'ToDoList',
    initialState :{
        list:[]
        
    },
    
    reducers: {
        addTodo : (state,action)=>{
           state.list.push({id: Date.now(), text: action.payload,complete: false})
        },
        showTodo: (state,action)=>{
            const todo = state.list.find(todo => todo.id === action.payload)
            if (todo) {
                todo.complete = !todo.complete
            }
        }
    }
})


export const { addTodo,showTodo } = TodoList.actions;
export const data = (state=>state.todos.list)
export default TodoList.reducer;