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
      username: this.props.username,
      isLoggedIn: true,
    };
  }

  // handleLogin = (user) => {
  //   this.setState({
  //     isLoggedIn: true,
  //     username: user,
  //   });
  // };

  //to set correct page
  handlePageChange = (page) => {
    this.setState(
      {
        currentPage: page,
      },
      () => {
        console.log(`In handlePageChange in Dashboard, page=${page}`);
      }
    );
  };

  render() {
    // const { isLoggedIn, username, currentPage } = this.state;
    // console.log(isLoggedIn, username, currentPage);
    // let pageComponent;

    // if (currentPage === "incellderm") {
    //   pageComponent = (
    //     <Incellderm
    //       handleLogin={this.handleLogin}
    //       page={this.handlePageChange}
    //     />
    //   );
    // } else if (currentPage === "radiansome") {
    //   pageComponent = (
    //     <Radiansome
    //       handleLogin={this.handleLogin}
    //       page={this.handlePageChange}
    //     />
    //   );
    // } else if (currentPage === "botalab") {
    //   pageComponent = (
    //     <Botalab handleLogin={this.handleLogin} page={this.handlePageChange} />
    //   );
    // } else if (currentPage === "vitamins") {
    //   pageComponent = (
    //     <Vitamins handleLogin={this.handleLogin} page={this.handlePageChange} />
    //   );
    // } else if (isLoggedIn === false) {
    //   pageComponent = (
    //     <Logout page={this.handlePageChange} username={username} />
    //   );
    // }
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
              Welcome to your dashboard {this.state.username}!<br />
              <h4>Please click on any of the brands to check the inventory.</h4>
            </div>
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
        <Row className="justify-items-center">
          <Col xs s md="0" lg xl="1" xxl="2">
            <br />
          </Col>
          <Col xs s="12" md="6" lg xl="2.5" xxl="2">
            <div className="dashboard_background dashboard_color1">
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
          <Col xs s="12" md="6" lg xl="2.5" xxl="2">
            <div className="dashboard_background dashboard_color2">
              <div className="dashboard_panel2">
                <img
                  src={require("../images/logo2.png")}
                  alt="radiansome"
                  className="dashboard_img"
                />
              </div>
              <div className="brand_names">
                <h4>Radiansome</h4>
              </div>
            </div>
          </Col>
          <Col xs s="12" md="6" lg xl="2.5" xxl="2">
            <div className="dashboard_background dashboard_color3">
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
          <Col xs s="12" md="6" lg xl="2.5" xxl="2">
            <div className="dashboard_background dashboard_color4">
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
          <Col xs s md="0" lg xl="1" xxl="2">
            <br />
          </Col>
        </Row>
      </Container>
    );
  }
}
