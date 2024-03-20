import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Product/Action';
import { useEffect } from 'react';
import { Avatar, Button, Card } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../Redux/Admin/Product/Action';

export default function ProductTable() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store);
    const location=useLocation();
    const navigate=useNavigate();
    console.log("========>", products);
    const searchParams = new URLSearchParams(location.search);
    const page=searchParams.get("page");

    useEffect(() => {

        const data = {
            category: "",
            colors: [],
            sizes: [],
            minPrice: 0,
            maxPrice: 1000000,
            minDiscount: 0,
            sort: "price_low",
            pageNumber: page || 0,
            pageSize: 10,
            stock: "",
        };
        dispatch(getProducts(data));
    }, [page,products.deletedProduct]);

    const handlePageChange=(event,value)=>{
        searchParams.set("page", value-1);
        const query = searchParams.toString();
        navigate({ search: `?${query}` });
    }

    const handleDeleteProduct = (productId) => {
        // Dispatch the action to delete the product
        dispatch(deleteProduct(productId))
            .then(() => {
                // If deletion is successful, fetch the updated products
                const updatedPage = searchParams.get("page") || 0;
                const data = {
                    category: "",
                    colors: [],
                    sizes: [],
                    minPrice: 0,
                    maxPrice: 1000000,
                    minDiscount: 0,
                    sort: "price_low",
                    pageNumber: updatedPage,
                    pageSize: 10,
                    stock: "",
                };
                dispatch(getProducts(data));
            })
            .catch((error) => {
                console.error("Error deleting product:", error);
            });
    };

    return (
        <Box width={"100%"}>
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
                                <TableCell><IconButton aria-label="delete" color='error' onClick={()=>handleDeleteProduct(item.productId)}>
                                    <DeleteOutlineIcon />
                                </IconButton></TableCell>
                            </TableRow>
                        ))}

                    </TableBody>

                </Table>

            </TableContainer>
            <div className='mt-2'>
                <div className='mx-auto px-4 py-5 flex justify-center shadow-lg rounded-md'>
                    <Pagination count={products.products?.totalPages} color="primary" onChange={handlePageChange}/>

                </div>
            </div>
        </Box>
    );
}