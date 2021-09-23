import { ADD_TODO,EDIT_TODO,DONE_TODO } from "./actionType";

const addtodo = (newItem) => {
    return {
        type: ADD_TODO,
        payload: newItem,
    };
};

export default addtodo;




export const editTodo= (payload) => {
    return {
        type:EDIT_TODO,
        payload ,
    }
}
export const doneTodo= (id) => {
    return {
        type:DONE_TODO,
        payload:id ,
    }
}
