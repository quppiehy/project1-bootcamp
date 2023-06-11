import React from "react";
import "../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
      username: "",
      password: "",
      email: "",
      login: false,
      user: "",
      signed: false,
      passwordconfirm: "",
    };
  }

  handleSignup = (event) => {
    event.preventDefault();
    const { username, email, password, passwordconfirm } = this.state;
    const myUsername = JSON.parse(localStorage.getItem(username));
    const myEmail = JSON.parse(localStorage.getItem(email));

    if (username === "" || email === "" || password === "") {
      return;
    }
    //check passwords are the same
    if (password !== passwordconfirm) {
      Swal.fire({
        title: "Error",
        text: `Sorry! You have keyed in different passwords. Please try again.`,
        icon: "error",
        timer: 5000,
        confirmButtonText: "OK",
      });
      return;
    }
    //email validation
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validRegex)) {
      Swal.fire({
        title: "Error!",
        text: "Invalid email address! Please key in a valid email address",
        icon: "error",
        timer: 5000,
        confirmButtonText: "OK",
      });
      return;
    }
    // check if username already exists
    if (myUsername != null) {
      Swal.fire({
        title: "Error",
        text: `Sorry! The username ${username} is already registered. Please use another username.`,
        icon: "error",
        timer: 5000,
        confirmButtonText: "OK",
      });
    } else if (myEmail != null) {
      //check if email already exists
      Swal.fire({
        title: "Error",
        test: `Sorry! The email ${email} is already registered. Please use another email address.`,
        icon: "error",
        timer: 5000,
        confirmButtonText: "OK",
      });
    } else {
      //both are empty, so can store details to local storage
      const myObject = { username, email, password };
      localStorage.setItem(username, JSON.stringify(myObject));
      localStorage.setItem(email, JSON.stringify(myObject));

      this.setState(
        {
          currentPage: "home",
          username: "",
          email: "",
          password: "",
          signed: true,
          passwordconfirm: "",
        },
        () => {
          Swal.fire({
            title: "Success!",
            text: "You have successfully registered. Please proceed to login!",
            icon: "success",
            timer: 5000,
            confirmButtonText: "OK",
          }).then(function () {
            // Redirect the user
            const anchor = document.createElement("a");
            anchor.href = "/";
            anchor.click();
          });
        }
      );
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="login_rectangle_signup">
        <Row>
          <Col>
            <div className="loginbox_title">Sign Up</div>
          </Col>
        </Row>
        <Form onSubmit={this.handleSignup}>
          <Row className="login_box_row">
            <Col>
              <Form.Group>
                <Form.Control
                  className="text_field w-75 mx-auto"
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={(event) => this.handleChange(event)}
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
                  onChange={(event) => this.handleChange(event)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="login_box_row3">
            <Col>
              <Form.Group>
                <Form.Control
                  className="text_field w-75 mx-auto"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="login_box_row3">
            <Col>
              <Form.Group>
                <Form.Control
                  className="text_field w-75 mx-auto"
                  name="passwordconfirm"
                  type="password"
                  placeholder="Confirm Password"
                  value={this.state.passwordconfirm}
                  onChange={(event) => this.handleChange(event)}
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
                className="align_right button_astext_signupLogin"
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
                type="submit"
                value="submit"
              >
                Sign Up
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Signup;
