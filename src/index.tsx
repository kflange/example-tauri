import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hello world</h1>;
      </div>
    );
  }
}

//document.addEventListener("DOMContentLoaded", () => {
ReactDOM.render(<App/>, document.querySelector('#app'));
//});
