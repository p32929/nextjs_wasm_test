import React from 'react';
import { controller } from '../utils/StatesController'
import { useSelector } from 'react-redux';
import { doSomething } from '../utils/ActionTest';
import WaasmComponent from '../components/others/WaasmComponent';

const index = () => {
    const states = useSelector(() => controller.states);

    // return <div>
    //     <p>Counter {states.counter}</p>
    //     <button onClick={() => {
    //         controller.increase()
    //     }}>+</button>
    //     <button onClick={() => {
    //         //
    //         doSomething()
    //     }}>-</button>
    // </div>

    return <WaasmComponent />
}

export default index;
