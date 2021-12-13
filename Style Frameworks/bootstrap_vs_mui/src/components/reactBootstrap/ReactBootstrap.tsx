import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import BootstrapNavbar from "./Navbar/BootstrapNavbar";

export interface IVisibleRBComponentState {
  [index: string]: boolean;
  RBCard: boolean;
  RBForm: boolean;
  RBTable: boolean;
}

const ReactBootstrap = () => {
  const testComponents: string[] = ["RBCard", "RBForm", "RBTable"];

  const [visibleRBComponent, setVisibleRBComponent] =
    useState<IVisibleRBComponentState>({
      RBCard: true,
      RBForm: false,
      RBTable: false,
    });

  return (
    <div style={{ width: "49%" }}>
      <BootstrapNavbar
        testComponents={testComponents}
        setVisibleComponent={setVisibleRBComponent}
      />
      <Container fluid="xl">
        {visibleRBComponent.RBCard ? <h5>card</h5> : null}
      </Container>
    </div>
  );
};

export default ReactBootstrap;
