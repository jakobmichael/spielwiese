import React from "react";
import "./App.scss";
import MaterialUi from "./components/materialUi/MaterialUi";
import ReactBootstrap from "./components/reactBootstrap/ReactBootstrap";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

export interface ITableRows {
    name: string;
    issues: number | string;
    version: string;
    updated: number | string;
    created: number;
    unpackedSize: number;
    weeklyDownloads: number;
    numberOfFiles: number;
}

const App = () => {
    const createData = (
        name: string,
        issues: number | string,
        version: string,
        updated: number | string,
        created: number,
        unpackedSize: number,
        weeklyDownloads: number,
        numberOfFiles: number
    ) => {
        return {
            name,
            issues,
            version,
            updated,
            created,
            unpackedSize,
            weeklyDownloads,
            numberOfFiles,
        };
    };

    const headers: string[] = [
        "FRAMEWORK",
        "VERSION",
        "UPDATED",
        "CREATED",
        "ISSUES",
        "SIZE MB",
        "WEEKLY DOWNLOADS",
        "FILES",
    ];

    const rows: ITableRows[] = [
        createData(
            "material-ui / mui",
            "-",
            "0.20.2",
            2018,
            2014,
            2.42,
            92372,
            1151
        ),
        createData(
            "react bootstrap",
            162,
            "2.0.3",
            "12/2021",
            2013,
            1.35,
            991345,
            660
        ),
    ];

    const theme = createTheme({
        palette: {
            primary: {
                main: "#f29224",
            },
            secondary: {
                main: "#a0a4a7",
            },
        },
        // shape: {
        //     borderRadius: 50,
        // },
    });

    return (
        <div className="App">
            {/* <ThemeProvider theme={theme}> */}
            <MaterialUi rows={rows} headers={headers} />
            {/* </ThemeProvider> */}
            <ReactBootstrap rows={rows} headers={headers} />
        </div>
    );
};

export default App;
