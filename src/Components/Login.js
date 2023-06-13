import React from "react";
import "../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
// import Dashboard from "./Dashboard";
// import Home from "./Home";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
      username: "",
      password: "",
      email: "",
      login: false,
      user: "",
      timesVisited: 0,
    };
  }

  handleLogin = (event) => {
    event.preventDefault();

    if (
      this.state.username.trim() === "" ||
      this.state.password.trim() === ""
    ) {
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
    const { username, password } = this.state;
    const myUsername = JSON.parse(localStorage.getItem(username));
    console.log(myUsername);
    console.log(username, password);
    if (myUsername === null) {
      Swal.fire({
        title: "Error",
        text: `Sorry! We do not have a user registered under ${this.state.username}. Please try again or Sign Up for an account.`,
        icon: "error",
        timer: 5000,
        confirmButtonText: "OK",
      });
    } else if (password !== myUsername.password) {
      Swal.fire({
        title: "Error",
        text: `Sorry! The details of ${this.state.username} does not match our records. Please try again or Sign Up for an account.`,
        icon: "error",
        timer: 5000,
        confirmButtonText: "OK",
      });
    } else if (password === myUsername.password) {
      console.log("running");
      //store the reference to this
      const email = myUsername.email;
      const timesVisited = myUsername.timesVisited + 1;
      const myObject = { username, email, password, timesVisited };
      localStorage.setItem(username, JSON.stringify(myObject));
      localStorage.setItem(email, JSON.stringify(myObject));
      const self = this;
      this.setState(
        {
          user: username,
          isLoggedIn: true,
          username: this.state.username,
          password: "",
          currentPage: "dashboard",
          timesVisited: timesVisited,
        },
        () => {
          Swal.fire({
            title: "Success!",
            text: "You have successfully logged in!",
            icon: "success",
            timer: 5000,
            confirmButtonText: "OK",
          }).then(function () {
            // Redirect the user
            console.log("Page function");
            self.props.handleLogin(self.state.username);
            self.props.page("dashboard");
          });
        }
      );
    }
  };

  handleChange = (events) => {
    let { name, value } = events.target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="login_rectangle_login">
        <Row>
          <Col>
            <div className="loginbox_title">Login</div>
          </Col>
        </Row>
        <Form onSubmit={this.handleLogin}>
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
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
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
                onClick={() => this.props.page("signup")}
              >
                Sign Up
              </button>
            </Col>
            <Col>
              <button
                className="=align_right button_astext_right"
                onClick={() => this.props.page("forgetpassword")}
              >
                Forget Password
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
                Login
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Login;
