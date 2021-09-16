import { ADD_TODO,DELETE_TODO,EDIT_TODO,DONE_TODO } from "./actionType";

const addtodo = (newItem) => {
    return {
        type: ADD_TODO,
        payload: newItem,
    };
};

export default addtodo;


export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id,
    };
};

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