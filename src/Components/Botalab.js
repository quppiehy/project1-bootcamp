import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavLink } from "react-bootstrap";

import logo from "../images/Logo.png";
import Inventory from "./Inventory";

export default class Botalab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "botalab",
      isLoggedIn: true,
    };
  }

  render() {
    const { username } = this.props;
    const { currentPage } = this.state;
    return (
      <Container fluid className="gradient">
        <Row className="top_row">
          <Col>
            <img className="logo_padding logo_size" src={logo} alt="Logo" />
          </Col>
          <Col>
            <Navbar
              collapseOnSelect
              expand="lg"
              bg="none"
              variant="light"
              className="float-end position-relative bottom-0 end-0"
            >
              <Navbar.Toggle
                aria-controls="navbarScroll"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
              />
              <Navbar.Collapse id="navbarScroll">
                <Nav fill variant="tabs" defaultActiveKey="/botalab">
                  <NavLink
                    className="tab_background nav-text float-end position-relative bottom-0 end-0"
                    onClick={() => {
                      this.props.page("incellderm");
                    }}
                  >
                    <p className="first_tab">Incellderm</p>
                  </NavLink>

                  <NavLink
                    className="tab_background nav-text float-end position-relative bottom-0 end-0"
                    href="/radiansome"
                    onClick={() => {
                      this.props.page("radiansome");
                    }}
                  >
                    <p className="second_tab">Radiansome</p>
                  </NavLink>
                  <NavLink
                    className="tab_background nav-text float-end position-relative bottom-0 end-0"
                    href="/botalab"
                    disabled
                  >
                    <p className="third_tab">Botalab</p>
                  </NavLink>
                  <NavLink
                    className="tab_background nav-text float-end position-relative bottom-0 end-0"
                    onClick={() => {
                      this.props.page("vitamins");
                    }}
                  >
                    <p className="fourth_tab">Vitamins</p>
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row>
          {/* <Col xs s md="0.5" lg xl xxl="1"></Col> */}
          <Col xs s md="11" lg xl xxl="10"></Col>
          {/* <Col xs s md="0.5" lg xl xxl="1"></Col> */}
        </Row>
        <Row>
          <Col xs s md="0.5" lg xl xxl="1"></Col>
          <Col xs s md="11" lg xl xxl="10">
            <Row>
              <h2 className="inventory_brand_name">{username}'s Botalab</h2>
            </Row>
            <Row>
              <div class="inventory_rectangle">
                <Inventory username={username} brand={currentPage} />
              </div>
            </Row>
          </Col>
          <Col xs s md="0.5" lg xl xxl="1"></Col>
        </Row>
      </Container>
    );
  }
}
