import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import './App.css'
import db from './firebase'
import firebase from 'firebase/compat/app';
import { useEffect } from 'react';

function App() {

  // The useSelector hook takes a selector function to select data from the store
  const counter = useSelector((state) => state.counter)
  // useDispatch is a hook of react-redux which allows us to dispatch our actions without connecting our component with connect method.
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({type: 'inc'})
  }

  const decrement = () => {
    dispatch({type: 'dec'})
  }

  const add = () => {
    dispatch({type: 'add', payload: 20})
  }

  return (
    <div className='app'>
      <h1>counter-app</h1>
      <h2>{counter}</h2>
      <div className='btn'>
        <Button onClick={increment} variant="outlined">Increment</Button>
        <Button onClick={decrement} variant="outlined">Decrement</Button>
        <Button onClick={add} variant="outlined">Add 20</Button>
      </div>
    </div>
  );
}

export default App;
