import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Product/Action';
import { useEffect } from 'react';
import { Avatar, Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';

export default function ProductTable() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store)
    console.log("========>", products)

    useEffect(() => {

        const data = {
            category: "",
            colors: [],
            sizes: [],
            minPrice: 0,
            maxPrice: 1000000,
            minDiscount: 0,
            sort: "price_low",
            pageNumber: 0,
            pageSize: 10,
            stock: "",
        };
        dispatch(getProducts(data));
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >Image</TableCell>
                        <TableCell >Title</TableCell>
                        <TableCell >Price</TableCell>
                        <TableCell >Category</TableCell>
                        <TableCell >Quantity</TableCell>
                        <TableCell >Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products?.products?.content?.map((item) => (
                        <TableRow
                            key={item.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Avatar alt={item.title} src={item.imageUrl} />
                            </TableCell>
                            <TableCell >{item.title}</TableCell>
                            <TableCell >{item.discountedPrice}</TableCell>
                            <TableCell >{item.category.name}</TableCell>
                            <TableCell >{item.quantity}</TableCell>
                            <TableCell><IconButton aria-label="delete" color='error'>
                                <DeleteOutlineIcon />
                            </IconButton></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}