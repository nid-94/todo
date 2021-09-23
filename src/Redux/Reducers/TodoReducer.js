import {
    ADD_TODO,
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
                    el.id == payload ? { ...el, Done: !el.Done } : el
                ),
            };

        default:
            return state;
    }
};

export default toDoReducer;
