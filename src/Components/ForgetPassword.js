import React from "react";
import "../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

class ForgetPassword extends React.Component {
  render() {
    return (
      <div className="login_rectangle_login">
        <Row>
          <Col>
            <h2>Reset Password</h2>
          </Col>
        </Row>
        <Form>
          <Row className="login_box_row">
            <Col>
              <Form.Group>
                <Form.Control
                  className="text_field w-75 mx-auto"
                  type="text"
                  placeholder="Username"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="login_box_row2">
            <Col>
              <Form.Group>
                <Form.Control
                  className="text_field w-75 mx-auto"
                  type="email"
                  placeholder="email"
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
                Signup
              </button>
            </Col>
          </Row>
          <Row className="login_box_row2">
            <Col>
              <br />
              <button
                className="main_button mx-auto"
                onClick={() => this.handlePageChange("forgetpassword")}
                type="submit"
              >
                Reset
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default ForgetPassword;
