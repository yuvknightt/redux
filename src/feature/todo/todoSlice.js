import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialstate = {
    todos:[{ id:1, text:"hello world"}]
}


export const todoSlice = createSlice({
     name :'todo',
     initialState,
     reducers :{        //prop ands functions
         addtodo :(state,action) => { 
    const todo ={
            id: nanoid(), 
            text: action.payload
         }
         state.todos.push(todo)
         },
         removetodo :(state,action) => { 
            state.todos = state.todos.filter((todo)=>{todo.id!=action.payload})
         },
     }
})

export const {addtodo,removetodo} = todoSlice.action
export default todoSlice.reducer