import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { ITableRows } from "../../App";
import CustomCardRb from "./card/CustomCardRb";
import BootstrapNavbar from "./navbar/BootstrapNavbar";
import CustomTableRb from "./table/CustomTableRb";

export interface IVisibleRBComponentState {
  [index: string]: boolean;
  RBCard: boolean;
  RBForm: boolean;
  RBTable: boolean;
}

interface IReactBootstrapProps {
  rows: ITableRows[];
  headers: string[];
}

const ReactBootstrap = (props: IReactBootstrapProps) => {
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
        {visibleRBComponent.RBCard ? <CustomCardRb /> : null}
        {visibleRBComponent.RBTable ? (
          <CustomTableRb rows={props.rows} headers={props.headers} />
        ) : null}
      </Container>
    </div>
  );
};

export default ReactBootstrap;
