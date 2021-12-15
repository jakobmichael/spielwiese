import * as React from "react";
import {
    Paper,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
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
                            return (
                                <TableCell align="right">{header}</TableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row: any) => (
                        <TableRow
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.version}</TableCell>
                            <TableCell align="right">{row.updated}</TableCell>
                            <TableCell align="right">{row.created}</TableCell>
                            <TableCell align="right">{row.issues}</TableCell>
                            <TableCell align="right">
                                {row.unpackedSize}
                            </TableCell>
                            <TableCell align="right">
                                {row.weeklyDownloads}
                            </TableCell>
                            <TableCell align="right">
                                {row.numberOfFiles}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTableMui;
