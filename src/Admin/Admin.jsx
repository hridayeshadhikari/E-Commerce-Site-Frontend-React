import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import AddProduct from "./Component/AddProduct";
import ProductTable from "./Component/ProductTable";
import OrderTable from "./Component/OrderTable";
import Customer from "./Component/Customer";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../Redux/Auth/Action";
import { useDispatch } from "react-redux";
import companyLogo from "../Assets/trendsphere-high-resolution-logo-transparent.png";
const drawerWidth = 240;

function Admin(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    {
      name: "Customers",
      path: "/admin/customer",
      icon: <SupervisedUserCircleIcon />,
    },
    { name: "Orders", path: "/admin/orders", icon: <StarBorderIcon /> },
    { name: "Products", path: "/admin/products", icon: <InventoryIcon /> },
    { name: "Logout", path: "/logout", icon: <LogoutIcon /> },
  ];

  const handleLogout = () => {
    dispatch(logout());

    navigate("/");
  };
  const navigate = useNavigate();

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            key={item.name}
            onClick={
              item.name === "Logout" ? handleLogout : () => navigate(item.path)
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <h2 style={{ margin: "0px auto" }}>Admin</h2>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/product/add" element={<AddProduct />}></Route>
          <Route path="/products/" element={<ProductTable />}></Route>
          <Route path="/orders" element={<OrderTable />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
        </Routes>
      </Box>
    </Box>
  );
}

Admin.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Admin;
