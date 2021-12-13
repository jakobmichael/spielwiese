import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { IVisibleRBComponentState } from "../ReactBootstrap";

interface IBootstrapNavbarProps {
  testComponents: string[];
  setVisibleComponent: any;
}

const BootstrapNavbar = (props: IBootstrapNavbarProps) => {
  const changeVisibleComponent = (component: string) => {
    const visibleComponents: IVisibleRBComponentState = {
      RBCard: false,
      RBForm: false,
      RBTable: false,
    };

    visibleComponents[component] = true;

    props.setVisibleComponent(visibleComponents);
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>React Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {props.testComponents.map((component) => {
              return (
                <Nav.Link onClick={() => changeVisibleComponent(component)}>
                  {component}
                </Nav.Link>
              );
            })}

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {props.testComponents.map((component) => {
                return (
                  <>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action/3.1"
                      onClick={() => changeVisibleComponent(component)}
                    >
                      {component}
                    </NavDropdown.Item>
                  </>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BootstrapNavbar;
