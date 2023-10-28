import { useReducer } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { reducer } from '../reducers/todo';
import CounterWrapper from './CounterWrapper';

function TodoWrapper() {
  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random().toString(),
      text: 'Аяга таваг угаах',
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const addTodo = (text) => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        text,
      },
    });
  };

  const editTodo = (text, id) => {
    dispatch({
      type: 'EDIT_TODO',
      payload: {
        text,
        id,
      },
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: {
        id,
      },
    });
  };

  const toggleComplete = (id) => {
    dispatch({
      type: 'TOGGLE_COMPLETE',
      payload: {
        id,
      },
    });
  };

  const toggleEditing = (id) => {
    dispatch({
      type: 'TOGGLE_EDITING',
      payload: {
        id,
      },
    });
  };

  return (
    <div className='TodoWrapper'>
      <h1>Todo жагсаалт</h1>
      <TodoForm saveTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <TodoForm todo={todo} saveTodo={editTodo} />
        ) : (
          <TodoItem
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleEditing={toggleEditing}
            toggleComplete={toggleComplete}
            todo={todo}
          />
        )
      )}
      <CounterWrapper />
    </div>
  );
}

export default TodoWrapper;
