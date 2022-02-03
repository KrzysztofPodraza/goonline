import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import AddColors from "./components/AddColors";
import ColorsList from "./components/ColorsList";

class App extends React.Component {
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
