import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterAction';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Counter app</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => dispatch(incrementCounter())}>INCREMENT</button>
            <button onClick={() => dispatch(decrementCounter())}>DECREMENT</button>
            <button onClick={() => dispatch(resetCounter())}>RESET</button>
        </div>
    );
};

export default Counter;