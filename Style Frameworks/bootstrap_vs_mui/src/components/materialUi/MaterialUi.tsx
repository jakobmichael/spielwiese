import React, { useState } from "react";
import { Container } from "@mui/material";
import CustomCardMui from "./card/CustomCardMui";
import CustomTableMui from "./table/CustomTableMui";
import { ITableRows } from "../../App";
import MuiAppbar from "./appbar/MuiAppbar";
import CustomDrawer from "./drawer/CustomDrawer";
import FormMui from "./form/FormMui";
import classes from "./MaterialUi.module.scss";

export interface IVisibleMuiComponentState {
    [index: string]: boolean;
    MuiCard: boolean;
    MuiForm: boolean;
    MuiTable: boolean;
}

interface IMaterialUiProps {
    rows: ITableRows[];
    headers: string[];
}

type Anchor = "top" | "left" | "bottom" | "right";

const MaterialUi = (props: IMaterialUiProps) => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const testComponents: string[] = ["MuiCard", "MuiForm", "MuiTable"];

    const [visibleMuiComponent, setVisibleMuiComponent] =
        useState<IVisibleMuiComponentState>({
            MuiCard: true,
            MuiForm: false,
            MuiTable: false,
        });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setOpenDrawer(open);
        };

    return (
        <div style={{ width: "49%" }}>
            <MuiAppbar toggleDrawer={toggleDrawer} />
            <Container maxWidth="xl" style={{ padding: "5%" }}>
                <CustomDrawer
                    openDrawer={openDrawer}
                    testComponents={testComponents}
                    toggleDrawer={toggleDrawer}
                    setOpenComponent={setVisibleMuiComponent}
                />
                {visibleMuiComponent.MuiCard ? <CustomCardMui /> : null}
                {visibleMuiComponent.MuiTable ? (
                    <CustomTableMui rows={props.rows} headers={props.headers} />
                ) : null}
                {visibleMuiComponent.MuiForm ? <FormMui /> : null}
            </Container>
        </div>
    );
};

export default MaterialUi;
