import React from "react";
import "../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

import Newpassword from "./Newpassword";

class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
      username: "",
      email: "",
      login: false,
    };
  }

  //to set correct page
  handlePageChange = (page) => {
    this.setState(
      {
        currentPage: page,
      },
      () => {
        console.log(this.state.username, this.state.email);
      }
    );
  };

  handleChange = (events) => {
    let { name, value } = events.target;

    this.setState({
      [name]: value,
    });
  };

  handlePasswordReset = (event) => {
    event.preventDefault();
    const { username, email } = this.state;
    const myUsername = JSON.parse(localStorage.getItem(username));

    if (username === "" || email === "") {
      Swal.fire({
        title: "Error",
        text: `Sorry, you have to fill up both fields.`,
        icon: "error",
        timer: 5000,
        confirmButtonText: "OK",
      }).then(function () {
        // return to page
        return;
      });
    }

    if (myUsername === null) {
      Swal.fire({
        title: "Error",
        text: `Sorry, this username ${username} is not registered. Please sign up or enter a different username`,
        icon: "error",
        timer: 5000,
        confirmButtonText: "OK",
      });
    } else if (myUsername != null && myUsername.email !== email) {
      Swal.fire({
        title: "Error",
        text: `Sorry, this username ${username} and email ${email} does not match our records. Please sign up or enter different details.`,
        icon: "error",
        timer: 5000,
        confirmButtonText: "OK",
      });
    } else {
      //allow reset password
      this.setState(
        {
          currentPage: "newpassword",
        },
        () => {
          this.handlePageChange("newpassword");
        }
      );
    }
  };

  render() {
    const { currentPage } = this.state;

    let pageComponent;
    if (currentPage === "newpassword") {
      pageComponent = (
        <Newpassword
          page={this.handlePageChange}
          username={this.state.username}
          email={this.state.email}
        />
      );
    }
    return (
      <div className="login_rectangle_login">
        <Row>
          <Col>
            <div className="loginbox_title">Reset Password</div>
          </Col>
        </Row>

        {currentPage === "newpassword" ? (
          <div>{pageComponent}</div>
        ) : (
          <div>
            <Form onSubmit={this.handlePasswordReset}>
              <Row className="login_box_row">
                <Col>
                  <Form.Group>
                    <Form.Control
                      className="text_field w-75 mx-auto"
                      name="username"
                      type="text"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={(events) => this.handleChange(events)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="login_box_row2">
                <Col>
                  <Form.Group>
                    <Form.Control
                      className="text_field w-75 mx-auto"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={(events) => this.handleChange(events)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="login_box_row3">
                <Col>
                  <button
                    className="align_left button_astext"
                    onClick={() => this.props.page("home")}
                  >
                    Login
                  </button>
                </Col>
                <Col>
                  <button
                    className="align_right button_astext"
                    onClick={() => this.props.page("signup")}
                  >
                    Sign Up
                  </button>
                </Col>
              </Row>
              <Row className="login_box_row2">
                <Col>
                  <br />
                  <button
                    className="main_button mx-auto"
                    value="submit"
                    type="submit"
                  >
                    Reset
                  </button>
                </Col>
              </Row>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

export default ForgetPassword;
