import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

interface IMuiAppbarProps {
    toggleDrawer: any;
}

const MuiAppbar = (props: IMuiAppbarProps) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={props.toggleDrawer("left", true)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MUI
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default MuiAppbar;
