import React from "react";
import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { IVisibleMuiComponentState } from "../MaterialUi";

interface ICustomDrawerProps {
  openDrawer: boolean;
  testComponents: string[];
  toggleDrawer: any;
  setOpenComponent: any;
}

const CustomDrawer = (props: ICustomDrawerProps) => {
  const changeVisibleComponent = (component: string) => {
    const visibleComponents: IVisibleMuiComponentState = {
      MuiCard: false,
      MuiForm: false,
      MuiTable: false,
    };

    visibleComponents[component] = true;

    props.setOpenComponent(visibleComponents);
  };

  return (
    <Drawer
      anchor="left"
      open={props.openDrawer}
      onClose={props.toggleDrawer("left", false)}
    >
      <List>
        {props.testComponents.map((component) => {
          return (
            <ListItemButton>
              <ListItemText
                primary={component}
                onClick={() => changeVisibleComponent(component)}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
