import { createSlice } from "@reduxjs/toolkit"




const TodoSlice = createSlice({
    name : 'ToDoList',
    initialState :{
        list:[]
        
    },
    
    reducers: {
        addTodo : (state,action)=>{
           state.list.push({id: Date.now(), text: action.payload,complete: false})
        },
        editTodo: (state,action)=>{
            const {id,text} = action.payload
            const todo = state.list.find(todo=> todo.id === id)
            if (todo) {
                todo.text = text
            }
        },
        deleteTodo: (state,action)=>{

            state.list = state.list.filter(todo => todo.id !== action.payload)          
        },
    }
})


export const { addTodo,editTodo,deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;