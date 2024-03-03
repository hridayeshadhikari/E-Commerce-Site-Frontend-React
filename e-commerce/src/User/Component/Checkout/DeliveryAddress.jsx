import React from 'react';
import { Button, Grid, TextField, Box } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';

function DeliveryAddress() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget)

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      postalCode: data.get("postalCode"),
      phoneNumber: data.get("phoneNumber")
    }
    console.log("address", address);
  }

  return (
    <div className='container'>
      <Grid container spacing={4}>
        <Grid xs={12} lg={4} className=' h-[30rem] overflow-y-scroll lg:ml-[5rem]'>
          <div className='p-5 py-7 border-b cursor-pointer'>
            <AddressCard />
            <Button

              variant='contained'
              sx={{ bgcolor: "#33b249", marginTop: '1rem' }}
              type='submit'
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid xs={12} lg={7} spacing={3}>
          <Box className="border rounded-s-md shadow-md p-5 lg:ml-[1rem]">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    id='firstName'
                    name='firstName'
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    fullWidth
                    id='lastName'
                    name='lastName'
                    label="Last Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <TextField
                    fullWidth
                    id='address'
                    name='address'
                    label="Address"
                    variant="outlined"
                    required
                    multiline
                    rows={3}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField

                    fullWidth
                    id='city'
                    name='city'
                    label="City"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    fullWidth
                    id='state'
                    label="State"
                    name='state'
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    fullWidth
                    id='postalCode'
                    name='postalCode'
                    label="Postal Code"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    fullWidth
                    id='phoneNumber'
                    name='phoneNumber'
                    label="Phone Number"
                    variant="outlined"
                    required
                  />

                </Grid>
                <Button

                  variant='contained'
                  sx={{ bgcolor: "#33b249", marginTop: '1rem', marginLeft: '1.5rem' }}
                  type='submit'
                >
                  Deliver Here
                </Button>
              </Grid>
            </form>

          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default DeliveryAddress;
