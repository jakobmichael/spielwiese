import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { ITableRows } from "../../App";
import CustomCardRb from "./card/CustomCardRb";
import FormRb from "./form/FormRb";
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
            <Container fluid="xl" style={{ padding: "2%" }}>
                {visibleRBComponent.RBCard ? <CustomCardRb /> : null}
                {visibleRBComponent.RBTable ? (
                    <CustomTableRb rows={props.rows} headers={props.headers} />
                ) : null}
                {visibleRBComponent.RBForm ? <FormRb /> : null}
            </Container>
        </div>
    );
};

export default ReactBootstrap;
