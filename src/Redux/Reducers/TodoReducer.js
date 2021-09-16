import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    DONE_TODO,
} from "../Actions/actionType";

let initialState = {
    toDo: [
        { task: "learn React", id: 1, Done: false },
        { task: "learn Redux", id: 2, Done: false },
        { task: "learn Javascript", id: 3, Done: false },
    ],
    errors: [],
};

const toDoReducer = (state = initialState, action) => {
    
    const { type, payload } = action;
    switch (type) {
        case ADD_TODO:
            return { ...state, toDo: [...state.toDo, payload] };
        case DELETE_TODO:
            return {
                ...state,
                toDo: state.toDo.filter((el) => el.id !== payload),
            };
        case EDIT_TODO:
            return {
                ...state,
                toDo: state.toDo.map((el) =>
                    el.id == payload.id ? { ...el, task: payload.task } : el
                ),
            };
        case DONE_TODO:
            return {
                ...state,
                toDo: state.toDo.map((el) =>
                    el.id == payload ? { ...el, Done: !state.Done } : el
                ),
            };

        default:
            return state;
    }
};

export default toDoReducer;
