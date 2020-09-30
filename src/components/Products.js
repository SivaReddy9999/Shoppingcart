import React from 'react'
import {Card, CardContent, Typography, Grid, Button} from '@material-ui/core'





function Products(props) {

  return (
      
    <Grid container spacing={3} justify="center" >
        {props.myproducts && props.myproducts.map((product,index) => {return (
        <Grid item component={Card} xs={12} md={3} key={product.productid}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{product.productName}</Typography>
                <Typography color="textSecondary" gutterBottom>{product.price}</Typography>
                <Button onClick={() => props.addQ(index)} variant="contained" color="primary">
                Buy
              </Button>
          </CardContent>
        </Grid> )})} 
    
    
 </Grid>
  );
}

export default Products