import React from "react";
import "./App.css";

import Home from "./Components/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
    };
  }

  //to set correct page
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    let pageComponent;

    pageComponent = <Home page={this.handlePageChange} p />;

    return <div>{pageComponent}</div>;
  }
}

export default App;
