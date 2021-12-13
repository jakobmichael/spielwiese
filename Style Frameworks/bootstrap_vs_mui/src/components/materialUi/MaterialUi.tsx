import React, { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Toolbar,
} from "@mui/material";
import CustomDrawer from "./Drawer/CustomDrawer";
import MuiAppbar from "./Appbar/MuiAppbar";
import CustomCard from "./card/CustomCard";

type Anchor = "top" | "left" | "bottom" | "right";

export interface IVisibleMuiComponentState {
  [index: string]: boolean;
  MuiCard: boolean;
  MuiForm: boolean;
  MuiTable: boolean;
}

const MaterialUi = () => {
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
      <Container maxWidth="xl">
        <CustomDrawer
          openDrawer={openDrawer}
          testComponents={testComponents}
          toggleDrawer={toggleDrawer}
          setOpenComponent={setVisibleMuiComponent}
        />
        {visibleMuiComponent.MuiCard ? <CustomCard /> : null}
      </Container>
    </div>
  );
};

export default MaterialUi;
