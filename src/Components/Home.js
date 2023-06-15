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
import Swal from "sweetalert2";

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
    console.log(`I am in PageChange`);
    this.setState(
      {
        currentPage: page,
      },
      () => {
        console.log(page);
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

  handleLogout = () => {
    this.setState(
      {
        isLoggedIn: false,
        username: "",
      },
      () => {
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged out. See you next time!",
          icon: "success",
          timer: 5000,
          confirmButtonText: "OK",
        }).then(function () {
          const anchor = document.createElement("a");
          anchor.href = "/";
          anchor.click();
        });
      }
    );
  };

  render() {
    const { isLoggedIn, username, currentPage } = this.state;
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
    } else if (currentPage === "dashboard") {
      pageComponent = (
        <Dashboard page={this.handlePageChange} username={username} />
      );
    } else if (currentPage === "incellderm") {
      pageComponent = (
        <Incellderm
          page={this.handlePageChange}
          username={username}
          logout={this.handleLogout}
        />
      );
    } else if (currentPage === "radiansome") {
      pageComponent = (
        <Radiansome
          page={this.handlePageChange}
          username={username}
          logout={this.handleLogout}
        />
      );
    } else if (currentPage === "botalab") {
      pageComponent = (
        <Botalab
          page={this.handlePageChange}
          username={username}
          logout={this.handleLogout}
        />
      );
    } else if (currentPage === "vitamins") {
      pageComponent = (
        <Vitamins
          page={this.handlePageChange}
          username={username}
          logout={this.handleLogout}
        />
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
            <Col s="12" md="10" lg="5" className="logo_padding ">
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
            <Col s="12" md="10" lg="5" className="align-self-center">
              {pageComponent}
            </Col>
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
