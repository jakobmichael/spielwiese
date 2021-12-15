import React from "react";
import { Table } from "react-bootstrap";
import { ITableRows } from "../../../App";

interface ICustomTableRbProps {
    rows: ITableRows[];
    headers: string[];
}

const CustomTableRb = (props: ICustomTableRbProps) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {props.headers.map((header) => {
                        return <th>{header}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {props.rows.map((row: any) => {
                    return (
                        <tr>
                            <td>{row.name}</td>
                            <td>{row.version}</td>
                            <td>{row.updated}</td>
                            <td>{row.created}</td>
                            <td>{row.issues}</td>
                            <td>{row.unpackedSize}</td>
                            <td>{row.weeklyDownloads}</td>
                            <td>{row.numberOfFiles}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default CustomTableRb;
