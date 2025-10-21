// context.js
import { createContext, useContext, useReducer } from "react";

// Create context
const TodoContext = createContext();

// Initial state: array of task objects
const initialState = [
  // { id: 1, text: "Learn React", completed: false }
];

// Reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(), // Simple unique ID
          text: action.payload.trim(),
          completed: false,
        },
      ];

    case "toggle":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case "delete":
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
};

// Provider component
export const TodoProvider = ({ children }) => {
  const [items, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ items, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook for easy access
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
