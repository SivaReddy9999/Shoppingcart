import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



function Paymentgateway(props) {
 

  return (
    <TableContainer component={Paper}>
      <h1>Payment Gateway</h1>  
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Price</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.myproducts && props.myproducts.map((product,index) => {
              if(product.count>0) {
                  return (<TableRow key={product.productid}>
                        <TableCell component="th" scope="row">
                            {product.productName}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {product.price}
                        </TableCell>
                        </TableRow>)
}})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Paymentgateway