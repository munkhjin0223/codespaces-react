import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoWrapper() {
    const [todos, setTodos] = useState([{
        id: Math.random().toString(),
        text: 'Аяга таваг угаах',
        isCompleted: false,
        isEditing: false
    }]);

    const addTodo = (text) => {
        setTodos([...todos, { id: Math.random().toString(),
            text,
            isCompleted: false,
            isEditing: false
        }])
    }

    const editTodo = (text, id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text, isEditing: false } : todo)));
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const toggleComplete = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
    }

    const toggleEditing = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
    }

    return (
        <div className="TodoWrapper">
            <h1>
                Todo жагсаалт
            </h1>
            <TodoForm saveTodo={addTodo} />
            {todos.map((todo) => (
                todo.isEditing ?
                    <TodoForm todo={todo} saveTodo={editTodo} />
                :
                    <TodoItem key={todo.id} deleteTodo={deleteTodo} toggleEditing={toggleEditing} toggleComplete={toggleComplete} todo={todo} />
            )
            )}
        </div>
    )
}

export default TodoWrapper;