import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = () => {
    const todolist = useSelector(state => state.ToDo.toDo)
    return (
        <div>
            {todolist.map((todo,i)=> <TodoItem todo={todo} key={i}/> )}
        </div>
    )
}

export default TodoList
