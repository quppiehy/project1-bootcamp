import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "../images/Logo.png";
import Login from "./Login";
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";
import Newpassword from "./Newpassword";
import Dashboard from "./Dashboard";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
      username: "",
      isLoggedIn: false,
    };
  }

  //to set correct page
  handlePageChange = (page) => {
    this.setState(
      {
        currentPage: page,
      },
      () => {
        console.log(`In handlePageChange in Home, page=${page}`);
      }
    );
  };

  handleLogin = (user) => {
    this.setState({
      isLoggedIn: true,
      username: user,
    });
  };

  render() {
    const { isLoggedIn, username, currentPage } = this.state;
    console.log(isLoggedIn, username, currentPage);
    let pageComponent;

    if (currentPage === "home") {
      pageComponent = (
        <Login handleLogin={this.handleLogin} page={this.handlePageChange} />
      );
    } else if (currentPage === "signup") {
      pageComponent = <Signup page={this.handlePageChange} />;
    } else if (currentPage === "forgetpassword") {
      pageComponent = <ForgetPassword page={this.handlePageChange} />;
    } else if (currentPage === "newpassword") {
      pageComponent = <Newpassword page={this.handlePageChange} />;
    } else if (isLoggedIn === true) {
      pageComponent = (
        <Dashboard page={this.handlePageChange} username={username} />
      );
    }

    if (
      currentPage === "home" ||
      currentPage === "signup" ||
      currentPage === "forgetpassword" ||
      currentPage === "newpassword"
    ) {
      return (
        <Container fluid className="gradient">
          <Row>
            <Col xs lg xl xxl="12">
              <img className="logo_padding logo_size" src={logo} alt="Logo" />
            </Col>
          </Row>
          <Row className="justify-items-center">
            <Col xs s="0" md="0.8" lg xl="1" xxl="3"></Col>
            <Col xs s="12" md="6.2" lg xl="5" xxl="4" className="logo_padding">
              <div className="logo_padding site_title">
                The
                <br />
                StockTaker
              </div>
              <br />
              <div className="site_text">
                Welcome to the StockTaker. <br />
                {currentPage === "signup" ? (
                  <div> Please sign up for an account.</div>
                ) : currentPage === "forgetpassword" ? (
                  <div>Please key in your details to reset your password.</div>
                ) : currentPage === "newpassword" ? (
                  <div>Please key in the new password to reset it.</div>
                ) : (
                  <div>Please sign in to your account.</div>
                )}
              </div>
              <br />
            </Col>
            <Col xs s="12" md="4" lg xl="3" xxl="2">
              {pageComponent}
            </Col>
            <Col xs s md="0" lg xl="1" xxl="3"></Col>
          </Row>
        </Container>
      );
    } else if (currentPage === "dashboard") {
      return <div>{pageComponent}</div>;
    } else if (currentPage === "inventory") {
      return <div>This is inventory</div>;
    }
  }
}
