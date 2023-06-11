import React from "react";
import "../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

export default class Newpassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "newpassword",
      username: this.props.username,
      email: this.props.email,
      password: "",
      passwordconfirm: "",
    };
  }

  //to change password
  handleNewPassword = (event) => {
    event.preventDefault();

    const { username, email, password, passwordconfirm } = this.state;
    console.log(username);
    if (password !== passwordconfirm) {
      Swal.fire({
        title: "error",
        text: `The passwords do not match. Please try again.`,
        icon: "error",
        timer: 5000,
        confirmButtonText: "OK",
      });
    } else {
      const myObject = { username, email, password };
      localStorage.setItem(username, JSON.stringify(myObject));
      localStorage.setItem(email, JSON.stringify(myObject));
      this.setState(
        {
          currentPage: "home",
          password: "",
          passwordconfirm: "",
        },
        () => {
          Swal.fire({
            title: "Success",
            text: `Password has been updated for username ${username}. Please login with your new password.`,
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
    }
  };

  handleChange = (events) => {
    let { name, value } = events.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleNewPassword}>
          <Row className="login_box_row">
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
          <Row className="login_box_row2">
            <Col>
              <Form.Group>
                <Form.Control
                  className="text_field w-75 mx-auto"
                  name="passwordconfirm"
                  type="password"
                  placeholder="Confirm Password"
                  value={this.state.passwordconfirm}
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
                className="=align_right button_astext_right"
                onClick={() => this.props.page("signup")}
              >
                Signup
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
                Submit
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
