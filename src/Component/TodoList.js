import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Button } from "semantic-ui-react";

const TodoList = () => {
    const [status, setStatus] = useState("all");

    const todolist = useSelector((state) => state.ToDo.toDo);
    return (
        <div>
            <Button.Group>
                <Button onClick={()=>setStatus("all")}>All</Button>
                <Button.Or />
                <Button onClick={()=>setStatus("done")}>Done</Button>
                <Button.Or />
                <Button onClick={()=>setStatus("undone")}>Undone</Button>
            </Button.Group>
            <br />
            {status === "all"
                ? todolist.map((todo, i) => <TodoItem todo={todo} key={i} />)
                : status == "done"
                ? todolist.filter((el) => el.Done).map((todo, i) =><TodoItem todo={todo} key={i} />)
                : todolist.filter((el) => !el.Done).map((todo, i) =><TodoItem  todo={todo} key={i}/>)}
        </div>
    );
};

export default TodoList;
