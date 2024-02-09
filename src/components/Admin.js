import React from "react";
import { useLocation } from "react-router-dom";
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navs from "./Navs";

const Admin = () => {
  const location = useLocation();
console.log(location);
  const datas = location?.state.data;
  return (
  <div>
    <Navs/>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Phnum</TableCell>
            <TableCell >Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas&&datas.map((row,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {/* <TableCell >{row.name}</TableCell> */}
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.phnum}</TableCell>
              <TableCell >{row.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  








    // <div>
    //   {datas &&
    //     datas.map((a, i) => (
    //       <ul key={i}>
    //         <li>{a.name}</li>
    //         <li>{a.email}</li>
    //         <li>{a.phnum}</li>
    //         <li>{a.message}</li>
    //       </ul>
    //     ))}
    // </div>
  
  );
};

export default Admin;
