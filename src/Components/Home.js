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
import Incellderm from "../Components/Incellderm";
import Radiansome from "../Components/Radiansome";
import Botalab from "../Components/Botalab";
import Vitamins from "../Components/Vitamins";

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

  // to set state of username in parent Home.js to username from Login.js
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
    // to display correct page after user clicks
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
    } else if (isLoggedIn === true && currentPage === "dashboard") {
      pageComponent = (
        <Dashboard
          page={this.handlePageChange}
          username={this.state.username}
        />
      );
    } else if (isLoggedIn === true && currentPage === "incellderm") {
      pageComponent = (
        <Incellderm
          page={this.handlePageChange}
          username={this.state.username}
        />
      );
    } else if (isLoggedIn === true && currentPage === "radiansome") {
      pageComponent = (
        <Radiansome
          page={this.handlePageChange}
          username={this.state.username}
        />
      );
    } else if (isLoggedIn === true && currentPage === "botalab") {
      pageComponent = (
        <Botalab page={this.handlePageChange} username={this.state.username} />
      );
    } else if (isLoggedIn === true) {
      pageComponent = (
        <Vitamins page={this.handlePageChange} username={this.state.username} />
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
          <Row className="justify-content-center align-self-center">
            {/* <Col xs="0" s="0" md="1" lg="1" xl="2" xxl="2"></Col> */}
            <Col
              xs="12"
              s="12"
              md="10"
              lg="5"
              xl="4"
              xxl="4"
              className="logo_padding "
            >
              <div className="site_title">
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
            <Col
              xs="12"
              s="12"
              md="10"
              lg="5"
              xl="5"
              xxl="5"
              className="align-self-center"
            >
              {pageComponent}
            </Col>

            {/* <Col xs="0" s="0" md="2" lg="1" xl="1" xxl="1"></Col> */}
          </Row>
        </Container>
      );
    } else if (
      currentPage === "dashboard" ||
      currentPage === "incellderm" ||
      currentPage === "radiansome" ||
      currentPage === "botalab" ||
      currentPage === "vitamins"
    ) {
      return <div>{pageComponent}</div>;
    }
  }
}
