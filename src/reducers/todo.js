export function reducer(todos, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...todos,
        { id: Math.random().toString(), text: action.payload.text, isCompleted: false, isEditing: false },
      ];
    }
    case 'EDIT_TODO': {
      return todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text, isEditing: false } : todo
      );
    }
    case 'DELETE_TODO': {
      return todos.filter((todo) => todo.id !== action.payload.id);
    }
    case 'TOGGLE_COMPLETE': {
      return todos.map((todo) => (todo.id === action.payload.id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    }
    case 'TOGGLE_EDITING': {
      return todos.map((todo) => (todo.id === action.payload.id ? { ...todo, isEditing: !todo.isEditing } : todo));
    }
    default: {
      return todos;
    }
  }
}
