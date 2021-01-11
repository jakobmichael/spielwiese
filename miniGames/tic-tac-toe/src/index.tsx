import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Theme, createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F29224",
    },
    secondary: {
      main: "#A0A4A7",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
