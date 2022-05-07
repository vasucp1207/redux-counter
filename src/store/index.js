import { createStore } from "@reduxjs/toolkit";

// Reducers are the only way to change states in Redux. 
// In redux, the reducers are the pure functions that contain the logic and calculation that needed to be performed on the state.
function reducer(state = {counter: 0}, action){

    if(action.type === 'inc'){
        return {counter: state.counter + 1}
    }
    if(action.type === 'dec'){
        return {counter: state.counter - 1}
    }
    if(action.type === 'add'){
        return {counter: state.counter + action.payload}
    }
    return state
}

// Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.
const store = createStore(reducer)
export default store