import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../images/Logo.png";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "dashboard",
      isLoggedIn: true,
    };
  }

  render() {
    const { username } = this.props;
    // const { isLoggedIn, currentPage } = this.state;

    return (
      <Container fluid className="gradient fill">
        <Row>
          {/* <Col xs lg xl xxl="12"> */}
          <Col>
            <img className="logo_padding logo_size" src={logo} alt="Logo" />
          </Col>
        </Row>
        <Row className="justify-items-center">
          {/* <Col xs lg xl xxl="12"> */}
          <Col>
            <div className="page_title">
              Welcome to your dashboard {username}!<br />
              <h4>Please click on any of the brands to check the inventory.</h4>
            </div>
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
        <Row>
          <Container className="wrapper">
            <Row className="justify-content-md-center">
              <Col></Col>
              <Col className=" panel_padding">
                <div
                  className="dashboard_background dashboard_color1 panel_padding"
                  onClick={() => this.props.page("incellderm")}
                >
                  <div className="dashboard_panel1 p-2 ">
                    <img
                      src={require("../images/logo1.png")}
                      alt="incellderm"
                      className="dashboard_img p-2 "
                    />
                  </div>
                  <div className="brand_names p-2 ">
                    <h4>Incellderm</h4>
                  </div>
                </div>
              </Col>
              <Col className="panel_padding">
                <div
                  className="dashboard_background dashboard_color2 panel_padding "
                  onClick={() => this.props.page("radiansome")}
                >
                  <div className="dashboard_panel2 p-2 ">
                    <img
                      src={require("../images/logo2.png")}
                      alt="radiansome"
                      className="dashboard_img p-2 "
                    />
                  </div>
                  <div className="brand_names p-2 ">
                    <h4>Radiansome</h4>
                  </div>
                </div>
              </Col>
              <Col className="panel_padding">
                <div
                  className="dashboard_background dashboard_color3 panel_padding"
                  onClick={() => this.props.page("botalab")}
                >
                  <div className="dashboard_panel3n4 p-2 ">
                    <img
                      src={require("../images/logo3.png")}
                      alt="botalab"
                      className="dashboard_img p-2 "
                    />
                  </div>
                  <div className="brand_names3 p-2 ">
                    <h4>Botablab</h4>
                  </div>
                </div>
              </Col>
              <Col className="panel_padding">
                <div
                  className="dashboard_background dashboard_color4 panel_padding"
                  onClick={() => this.props.page("vitamins")}
                >
                  <div className=" dashboard_panel3n4 p-2 ">
                    <img
                      src={require("../images/logo4.png")}
                      alt="vitamins"
                      className="dashboard_img p-2 "
                    />
                  </div>
                  <div className="brand_names4 p-2 ">
                    <h4>Vitamins</h4>
                  </div>
                </div>
              </Col>
              <Col xl={0}></Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}
