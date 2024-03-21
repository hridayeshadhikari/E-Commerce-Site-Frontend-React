import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Admin/Product/Action';


const defaultSize = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
  { name: "XL", quantity: 0 }
]

export default function AddProduct() {
  const dispatch=useDispatch()
  const [productData, setProductData] = React.useState({

    "imageUrl": "",
    "extraImageUrl": [],
    "brand": "",
    "highlights": [],
    "title": "",
    "color": "",
    "discountedPrice": 0,
    "price": 0,
    "discountPercent": 0,
    "size": defaultSize,
    "quantity": 0,
    "firstLevelCategory": "",
    "secondLevelCategory": "",
    "thirdLevelCategory": "",
    "description": ""

  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? name = "quantity" : name = e.target.name;

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(productData))
    console.log("=====>", productData)
  }

  const handleExtraImageUrlChange = (index, value) => {
    const updatedExtraImageUrl = [...productData.extraImageUrl];
    updatedExtraImageUrl[index] = value;
    setProductData({ ...productData, extraImageUrl: updatedExtraImageUrl });
  };

  const handleHighlightsChange = (index, value) => {
    const updatedHighlights = [...productData.highlights];
    updatedHighlights[index] = value;
    setProductData({ ...productData, highlights: updatedHighlights });
  };

  console.log("=====>", productData)
  return (
    <div>
      <Typography variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center ">Add New Product</Typography>
      <form
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              name='imageUrl'
              onChange={handleChange}
              id="outlined-required"
              label="Image Url"
            />

          </Grid>
          {[...Array(4)].map((_, index) => (<Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="extraImageUrl"
              value={productData.extraImageUrl[index] || ''}
              onChange={(e) => handleExtraImageUrlChange(index, e.target.value)}
              id="outlined-required"
              label={`Image URL ${index + 1}`}
            />

          </Grid>))}



          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="title"
              onChange={handleChange}
              id="outlined-required"
              label="Product Name"
            />

          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              onChange={handleChange}
              name="brand"
              id="outlined-required"
              label="Brand"
            />

          </Grid>
          <Grid item xs={4} >
            <TextField
              fullWidth
              onChange={handleChange}
              name="price"
              id="outlined-required"
              label="Price"
            />

          </Grid>
          <Grid item xs={4} >
            <TextField
              fullWidth
              onChange={handleChange}
              name='discountedPrice'
              id="outlined-required"
              label="Discounted Price"
            />

          </Grid>
          <Grid item xs={4} >
            <TextField
              fullWidth
              onChange={handleChange}
              name="discountPercent"
              id="outlined-required"
              label="Discount Percent"
            />

          </Grid>



          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>First Level Category</InputLabel>
              <Select
                name="firstLevelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                label="First Level Category"
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLevelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
                <MenuItem value="gadget">Gadget</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLevelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                <MenuItem value="watch">Watches</MenuItem>
                <MenuItem value="women_watch">Women Watches</MenuItem>
                <MenuItem value="mobile">mobile</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name='description'
              onChange={handleChange}
              id="outlined-multiline-flexible"
              label="Description"
              multiline
              rows={4}
            />
          </Grid>
          {
            productData.size.map((item, index) => (
              <Grid container item spacing={2}>
                <Grid item>
                  <TextField
                    name='name'
                    id="outlined-read-only-input"
                    label="Size"
                    defaultValue={item.name}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid item >
                  <TextField
                    onChange={(event) => handleSizeChange(event, index)}
                    label="Quantity"
                    name="size_quantity"
                    type="number"
                    fullWidth
                  />
                </Grid>
              </Grid>



            ))
          }
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name='color'
              onChange={handleChange}
              id="outlined-required"
              label="Color"
            />

          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name='quantity'
              onChange={handleChange}
              id="outlined-required"
              label="Total Quantity"
            />

          </Grid>
          {[...Array(6)].map((_, index) => (<Grid item>
            <TextField
              fullWidth
              name="highlights"
              value={productData.highlights[index] || ''}
              onChange={(e) => handleHighlightsChange(index, e.target.value)}
              id="outlined-required"
              label="Highlights"
            />

          </Grid>))}


          <Grid item xs={12} >
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>

    </div>
  );
}