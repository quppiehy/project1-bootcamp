import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "./images/Logo.png";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ForgetPassword from "./Components/ForgetPassword";

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
    const { currentPage } = this.state;

    let pageComponent;

    if (currentPage === "home") {
      pageComponent = <Login page={this.handlePageChange} />;
    } else if (currentPage === "signup") {
      pageComponent = <Signup page={this.handlePageChange} />;
    } else if (currentPage === "forgetpassword") {
      pageComponent = <ForgetPassword page={this.handlePageChange} />;
    }

    return (
      <Container fluid className="gradient">
        <Row>
          <Col xs lg xl xxl="12">
            <img className="logo_padding logo_size" src={logo} alt="Logo" />
          </Col>
        </Row>
        <Row className="justify-items-center">
          <Col xs="0" md="0.8" lg xl="1" xxl="3"></Col>
          <Col xs="12" md="6.2" lg xl="5" xxl="4" className="logo_padding">
            <div className="logo_padding site_title">
              The
              <br />
              StockTaker
            </div>
            <br />
            <div className="site_text">
              Welcome to the StockTaker. <br />
              {currentPage === "signup" ? (
                <div> Please signup for an account</div>
              ) : currentPage === "forgetpassword" ? (
                <div>Please key in your details to reset your password</div>
              ) : (
                <div>Please sign in to your account.</div>
              )}
            </div>
            <br />
          </Col>
          <Col xs="12" md="4" lg xl="3" xxl="2">
            {pageComponent}
          </Col>
          <Col xs md="0" lg xl="1" xxl="3"></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
