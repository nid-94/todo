import React from "react";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { deleteTodo, doneTodo } from "../Redux/Actions/action";
import Edit from "./Edit";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    return (
        <div className="task">
            <h4>{todo.task}</h4>
            <Button.Group>
                <Edit id={todo.id} />
                <Button.Or />
                <Button positive onClick={() => dispatch(doneTodo(todo.id))}>
                    Done
                </Button>
                <Button.Or />
                <Button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    color="red">
                    Delete
                </Button>
            </Button.Group>
        </div>
    );
};

export default TodoItem;
