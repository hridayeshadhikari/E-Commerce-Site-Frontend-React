import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box } from '@mui/material';

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Fev',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'Dec',
  },
];
const valueFormatter = (value) => `${value}mm`;
const Dashboard = () => {
  return (
    <div>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper style={{ backgroundColor: '#2563eb' }}>
            <div className='p-4 font-bold text-white'>
              Products
              <Inventory2OutlinedIcon className='lg:ml-[7rem]' />
              <div className='text-xl mt-10'>
                223
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper style={{ backgroundColor: '#ea580c' }}>
            <div className='p-4 font-bold text-white'>
              Customers
              <PeopleOutlinedIcon className='lg:ml-[7rem]' />
              <div className='text-xl mt-10'>
                887
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper style={{ backgroundColor: '#15803d' }}>
            <div className='p-4 font-bold text-white'>
              Orders
              <StarBorderOutlinedIcon className='lg:ml-[7rem]' />
              <div className='text-xl mt-10'>
                256
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper style={{ backgroundColor: '#0f766e' }}>
            <div className='p-4 font-bold text-white'>
              Category
              <ClassOutlinedIcon className='lg:ml-[7rem]' />
              <div className='text-xl mt-10'>
                776
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <div className='mt-[5rem]'>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>

            <BarChart
              dataset={dataset}
              xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
              series={[
                { dataKey: 'london', label: 'London', valueFormatter },
                { dataKey: 'paris', label: 'Paris', valueFormatter },
                { dataKey: 'newYork', label: 'New York', valueFormatter },
                { dataKey: 'seoul', label: 'Seoul', valueFormatter },
              ]}
              {...chartSetting}
            />
            <div className='font-semibold text-center'>Sales</div>
          </Grid>
          <Grid item xs={6}>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              height={300}
              margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
              grid={{ vertical: true, horizontal: true }}
            /><div className='font-semibold text-center'>Orders</div>
          </Grid>

        </Grid>
      </div>
      
    </div>
  )
}

export default Dashboard

