import * as React from "react";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Table } from "react-bootstrap";
import { ITableRows } from "../../../App";

interface ICustomTableMui {
  rows: ITableRows[];
  headers: string[];
}

const CustomTableMui = (props: ICustomTableMui) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.headers.map((header) => {
              return <TableCell align="right">{header}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row: any) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.street}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.plz}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTableMui;
