import {
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import {
  TableCell,
  TableHead,
  Table,
  TableContainer,
  Box,
  Paper,
  TableRow,
  Avatar,
  TableBody,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelOrder,
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shippedOrder,
} from "../../Redux/Admin/Order/Action";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AvatarGroup from "@mui/material/AvatarGroup";

const OrderTable = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);
  const [orderStatus, setOrderStatus] = useState("");

  useEffect(() => {
    dispatch(getOrders());
  }, [
    adminOrder.delivered,
    adminOrder.shipped,
    adminOrder.confirmed,
    adminOrder.cancel,
    adminOrder.deletedOrder,
  ]);

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  const handleChange = (selectedStatus, orderId) => {
    setOrderStatus(selectedStatus);
    switch (selectedStatus) {
      case "SHIPPED":
        dispatch(shippedOrder(orderId));
        break;
      case "CANCELLED":
        dispatch(cancelOrder(orderId));
        break;
      case "CONFIRMED":
        dispatch(confirmOrder(orderId));
        break;
      case "DELIVERED":
        dispatch(deliveredOrder(orderId));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Typography variant="h4" className="py-2">
        Orders
      </Typography>
      <Box width={"100%"}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Total Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Update</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <AvatarGroup max={4} sx={{ justifyContent: "start" }}>
                      {item.orderItems?.map((items) => (
                        <Avatar src={items?.product?.imageUrl} />
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "0.875rem !important",
                        }}
                      >
                        {item.orderItems?.map((items) => (
                          <span className="flex">{items?.product?.title}</span>
                        ))}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption">
                      {item.orderItems.map((items) => (
                        <span className="opacity-80 flex">
                          {items?.product?.brand},
                        </span>
                      ))}
                    </Typography>
                  </TableCell>
                  <TableCell>₹{item?.price}</TableCell>
                  <TableCell className="text-white">
                    <Chip
                      sx={{
                        color: "white !important",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      label={item.orderStatus}
                      size="small"
                      color={
                        item.orderStatus === "PENDING"
                          ? "info"
                          : item.orderStatus === "DELIVERED"
                          ? "success"
                          : item.orderStatus === "CANCELLED"
                          ? "warning"
                          : "secondary"
                      }
                      className="text-white"
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl
                        variant="filled"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id={`basic-menu-${item.id}`}
                          value={item.orderStatus}
                          onChange={(event) =>
                            handleChange(event.target.value, item.id)
                          }
                        >
                          <MenuItem value="SHIPPED">Shipped</MenuItem>
                          <MenuItem value="CANCELLED">Cancelled</MenuItem>
                          <MenuItem value="CONFIRMED">Confirmed</MenuItem>
                          <MenuItem value="DELIVERED">Delivered</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => handleDeleteOrder(item.id)}
                    >
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
  );
};

export default OrderTable;
