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
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.street}</td>
              <td>{row.phone}</td>
              <td>{row.plz}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CustomTableRb;
