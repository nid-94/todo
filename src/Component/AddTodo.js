import React, { useRef } from "react";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import addtodo from "./../Redux/Actions/action";

const AddTodo = () => {
    const dispatch = useDispatch();
    const addRef = useRef();
    const handleAdd = () => {
        dispatch(addtodo({ task: addRef.current.value, id: Math.random(),Done:false}));
        addRef.current.value = "";
    };

    return (
        <div className="ui action input">
            <input
                size="small"
                placeholder="add task here"
                style={{ width: "50%" }}
                ref={addRef}
            />
            <Button
                animated="fade"
                onClick={() => {
                    if (addRef.current.value == "") {
                        return alert("please enter a task");
                    } else return handleAdd();
                }}>
                <Button.Content visible>ADD</Button.Content>
                <Button.Content hidden>ADDED</Button.Content>
            </Button>
        </div>
    );
};

export default AddTodo;
