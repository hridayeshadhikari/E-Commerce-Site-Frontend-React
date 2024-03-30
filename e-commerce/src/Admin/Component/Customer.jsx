import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../Redux/Admin/User/Action';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TableCell, TableHead, Table, TableContainer, Box, Paper, TableRow, Avatar, TableBody, IconButton ,Typography} from '@mui/material'


const Customer = () => {
  const dispatch = useDispatch();
  const { adminAction } = useSelector((store) => store)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  console.log("======>", adminAction)

  return (
    <div>
      <Box width={"100%"}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminAction?.users?.map((item) => (
                <TableRow key={item.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    <Avatar sx={{bgcolor:"blue"}}>{item.firstName[0].toUpperCase()+""+item.lastName[0].toUpperCase()}</Avatar>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography sx={{ fontWeight: 500, fontSize: "0.875rem !important" }}>
                       {item.firstName+" "+item.lastName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant='caption'>
                      {item.email}
                    </Typography>
                  </TableCell>
                  
                  
                 
                  <TableCell>
                    <IconButton aria-label="delete" color='error' >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  )
}

export default Customer
