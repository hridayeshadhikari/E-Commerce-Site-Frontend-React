import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = ({ item }) => {

    var date = new Date(item.timeStamp);
    var dateString = date.toDateString();
    var formattedDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    return (
        <div>
            <Grid container gap={1} spacing={{ xs: 5, sm: 4 }}>
                <Grid item xs={1}>
                    <Box >
                        <Avatar sx={{ width: '56', height: '56', bgcolor: 'gray' }}>{item.user.firstName[0].toUpperCase()}{item.user.lastName[0].toUpperCase()}</Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className='space-y-1'>
                        <div>
                            <p className='font-bold'>{item.user.firstName + " " + item.user.lastName}</p>
                            <p className='opacity-60 font-semibold '>{formattedDate}</p>
                        </div>
                    </div>
                    <Rating value={4} />
                    <p>{item.review}</p>
                </Grid>
            </Grid>

        </div>
    )
}

export default ProductReviewCard
