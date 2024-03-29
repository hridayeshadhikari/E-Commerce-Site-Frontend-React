import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';

const Dashboard = () => {
  return (
    <div>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper>
            <div className='p-4 font-bold'>
              Products
              <Inventory2OutlinedIcon className='lg:ml-[7rem]'/>
              <div className='text-xl mt-10'>
                223
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper>
            <div className='p-4 font-bold'>
              Customers
              <PeopleOutlinedIcon className='lg:ml-[7rem]'/>
              <div className='text-xl mt-10'>
                223
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper>
            <div className='p-4 font-bold'>
              Orders
              <StarBorderOutlinedIcon className='lg:ml-[7rem]'/>
              <div className='text-xl mt-10'>
                223
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper>
            <div className='p-4 font-bold'>
              Category
              <ClassOutlinedIcon className='lg:ml-[7rem]'/>
              <div className='text-xl mt-10'>
                223
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard

