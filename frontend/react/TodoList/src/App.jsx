import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useEffect, useReducer, useRef, useState } from 'react'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime()
  }
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": return [action.data, ...state];
    case "UPDATE": return state.map((item) => item.id === action.targetId ? {...item, isDone: !item.isDone} : item);
    case "DELETE": return state.filter((item) => item.id !== action.targetId);
    default: return state;
  }
}

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    // 2. useReducer
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime()
      }
    })

    // 1. useState
    // const newTodos = {
    //   id: idRef.current++,
    //   isDone: false,
    //   content,
    //   date: new Date().getTime()
    // }

    // setTodos([newTodos, ...todos]);
  }

  const onUpdate = (targetId) => {
    // 2. useReducer
    dispatch({
      type: "UPDATE",
      targetId
    })
    // 1. useState
    // setTodos(todos.map((todo) => {
    //   if (todo.id === targetId) {
    //     return {
    //       ...todo,
    //       isDone: !todo.isDone
    //     }
    //   }
    //   return todo
    // }))
  }

  const onDelete = (targetId) => {
    // 2. useReducer
    dispatch({
      type: "DELETE",
      targetId
    })
    // 1. useState
    // setTodos(todos.filter((todo) => {
    //   return todo.id != targetId
    // }))
  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
