import React from "react";
import "./App.scss";
import MaterialUi from "./components/materialUi/MaterialUi";
import ReactBootstrap from "./components/reactBootstrap/ReactBootstrap";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

export interface ITableRows {
    firstName: string;
    lastName: string;
    street: string;
    phone: number;
    plz: number;
}

const App = () => {
    const createData = (
        firstName: string,
        lastName: string,
        street: string,
        phone: number,
        plz: number
    ) => {
        return { firstName, lastName, street, phone, plz };
    };

    const headers: string[] = [
        "FIRST NAME",
        "LAST NAME",
        "STREET",
        "PHONE",
        "PLZ",
    ];

    const rows: ITableRows[] = [
        createData("Sayuri", "Doctor", "Prospect Street", 12839022, 11782),
        createData(
            "Donatianus",
            "Negrini",
            "Bridgeway Avenue",
            21289339202,
            22384
        ),
        createData("Hema", "Skjeggestad", "Brewer Bouled", 904234400923, 19228),
        createData("Theudobald", "Burke", "Victory Avenue", 1223787683, 379228),
        createData("Kinsley", "Jewell", "Grime Avenue", 190182768881, 42002),
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
