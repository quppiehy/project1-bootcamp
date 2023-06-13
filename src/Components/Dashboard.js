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
      <Container fluid className="gradient">
        <Row>
          <Col xs lg xl xxl="12">
            <img className="logo_padding logo_size" src={logo} alt="Logo" />
          </Col>
        </Row>
        <Row className="justify-items-center">
          <Col xs lg xl xxl="12">
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
          <Col xs="1" s="1" md="1" lg="1" xl="1" xxl="1"></Col>
          <Col
            xs="11"
            s="11"
            md="5"
            lg="2"
            xl="2"
            xxl="2"
            className="mx-auto col-6"
          >
            <div
              className="dashboard_background dashboard_color1"
              onClick={() => this.props.page("incellderm")}
            >
              <div className="dashboard_panel1">
                <img
                  src={require("../images/logo1.png")}
                  alt="incellderm"
                  className="dashboard_img"
                />
              </div>
              <div className="brand_names">
                <h4>Incellderm</h4>
              </div>
            </div>
          </Col>
          <Col
            xs="11"
            s="11"
            md="5"
            lg="2"
            xl="2"
            xxl="2"
            className="mx-auto padding"
          >
            <div
              className="dashboard_background dashboard_color2 "
              onClick={() => this.props.page("radiansome")}
            >
              <div className="dashboard_panel2">
                <img
                  src={require("../images/logo2.png")}
                  alt="radiansome"
                  className="dashboard_img mx-auto"
                />
              </div>
              <div className="brand_names">
                <h4>Radiansome</h4>
              </div>
            </div>
          </Col>
          <Col xs="12" s="12" md="3" lg="2" xl="2" xxl="2" className="mx-auto">
            <div
              className="dashboard_background dashboard_color3"
              onClick={() => this.props.page("botalab")}
            >
              <div className="dashboard_panel3n4">
                <img
                  src={require("../images/logo3.png")}
                  alt="botalab"
                  className="dashboard_img"
                />
              </div>
              <div className="brand_names3">
                <h4>Botablab</h4>
              </div>
            </div>
          </Col>
          <Col xs="12" s="12" md="6" lg="2" xl="2" xxl="2" className="mx-auto">
            <div
              className="dashboard_background dashboard_color4"
              onClick={() => this.props.page("vitamins")}
            >
              <div className=" dashboard_panel3n4">
                <img
                  src={require("../images/logo4.png")}
                  alt="vitamins"
                  className="dashboard_img"
                />
              </div>
              <div className="brand_names4">
                <h4>Vitamins</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
