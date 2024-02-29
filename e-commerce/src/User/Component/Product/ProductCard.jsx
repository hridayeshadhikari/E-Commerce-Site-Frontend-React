import React from 'react';
import { Grid, Typography, Paper, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';

const ProductPage = () => {
  return (
    <div className="flex justify-center items-center p-7 lg:p-10 lg:mx-40">
      <Grid container spacing={5}>
        {/* Image */}
        <Grid item xs={12} md={6} lg={4}>
          <img
            src="https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/full/1629717737612384e9619ceYDS_Product_4@2x.jpg"
            alt="Product"
            className="w-full h-auto"
          />
        </Grid>
       
        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Paper elevation={0} className="p-4">
            <Typography variant="h4" gutterBottom>
              Product Name
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography variant="h6" gutterBottom>
              $99.99
            </Typography>
            <Typography variant="h6" gutterBottom>
              Rating
            </Typography>
            <Typography variant="h6" gutterBottom>
              {/* Size Buttons */}
              <Grid container spacing={2}>
              <Grid item>
                  Size
                </Grid>
                <Grid item>
                  <Button variant="outlined">S</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">M</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">L</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">XL</Button>
                </Grid>
              </Grid>
            </Typography>
            <Typography variant="body2" gutterBottom>
              In stock
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<AddShoppingCartIcon />}
              style={{ marginRight: '15px' }}
            >
              Add to Cart
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<BoltIcon/>}
            >
              Buy Now
            </Button>

            <h1>review</h1>
            <p>rating</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
