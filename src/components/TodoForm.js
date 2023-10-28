import { useEffect, useRef, useState } from 'react';

function TodoForm(props) {
  const { todo, saveTodo } = props;
  const [value, setValue] = useState(todo?.text || '');
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (value) {
      if (todo) {
        saveTodo(value, todo.id);
      } else {
        saveTodo(value);
      }

      setValue('');
    }
  };

  useEffect(() => {
    inputRef.current.defaultValue = 'Хоол хийх';
  }, []);

  return (
    <form onSubmit={onSubmit} className='TodoForm'>
      <input
        ref={inputRef}
        type='text'
        className='todo-input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className='todo-btn' type='submit'>
        Хадгалах
      </button>
    </form>
  );
}

export default TodoForm;
