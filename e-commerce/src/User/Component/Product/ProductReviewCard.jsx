import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container gap={1} spacing={{ xs: 5, sm: 4 }}>
            <Grid item xs={1}>
                <Box >
                    <Avatar sx={{width:'56',height:'56',bgcolor:'gray'}}>H</Avatar>   
                </Box>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-1'>
                    <div>
                        <p className='font-bold'>Harry</p>
                        <p className='opacity-60 font-semibold '>March 2 2024</p>
                    </div>
                </div>
                <Rating value={4}/>
                <p>very good product very nice product amazing product</p>
            </Grid>
        </Grid>
     
    </div>
  )
}

export default ProductReviewCard
