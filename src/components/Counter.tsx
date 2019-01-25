import React, { Component, useState, useReducer } from 'react';

// function reducer(state: { counter: number }, action: { type: string }) {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, counter: state.counter + 1 };
//     default:
//       return state;
//   }
// }

const Counter = () => {
  const [count, setCount] = useState(0);
  //   const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div className="center">
      <div>Count: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        {/* <button onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </button> */}
      </div>
    </div>
  );
};

// export class Counter extends Component {
//   state = { count: 0 };

//   increment = () => {
//     this.setState(state => ({ count: state.count + 1 }));
//   };

//   render() {
//     const { count } = this.state;

//     return (
//       <div className="center">
//         <div>Count: {count}</div>
//         <div>
//           <button onClick={this.increment}>Increment</button>
//         </div>
//       </div>
//     );
//   }
// }

export default Counter;
