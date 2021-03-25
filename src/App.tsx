import React from "react";
import ReactDOM from "react-dom";

import { Counter } from "./components/Counter";

//const App: React.FC = () => {
//  console.log(`called App`);
//  setTimeout(
//    () => { this.setState({name: "foo"});
//  return (
//    <div>
//      <h1>hello world</h1>
//      <Counter>
//        {({ count, setCount }) => (
//          <div>
//            {count}
//            <button onClick={() => {
//              const count1 = count + 1;
//              setCount(count1);
//              alert(`count: ${count1}`);
//              ReactDOM.render(<App/>, document.querySelector('#app'));
//            }}>+</button>
//          </div>
//        )}
//      </Counter>
//    </div>
//  );
//};

const App: React.FC = () => {
  return (
    <div>
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;
