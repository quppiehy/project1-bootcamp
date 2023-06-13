import React from "react";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";

import Home from "./Components/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
      username: "",
    };
  }

  //to set correct page
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    let pageComponent;

    pageComponent = <Home page={this.handlePageChange} p />;

    return (
      <div>
        <NextUIProvider>{pageComponent}</NextUIProvider>
      </div>
    );
  }
}

export default App;
