import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import AddColors from "./components/AddColors";
import ColorsList from "./components/ColorsList";

type MyState = {
  count: number; // like this
};
class App extends React.Component {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <div>
        <AddColors />
        <ColorsList></ColorsList>
      </div>
    );
  }
}
export default App;
