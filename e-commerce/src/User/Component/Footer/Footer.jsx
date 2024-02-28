import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom'

import SecurePaymentImage from "../../../Assets/Razorpay_logo.webp";
import SecurePaymentImage1 from "../../../Assets/pay-pal.png";
import SecurePaymentImage2 from "../../../Assets/upi-icn.png";
import SecurePaymentImage3 from "../../../Assets/visa-icn.png";
import websitelogo from "../../../Assets/trendsphere-high-resolution-logo-transparent.png"

function Copyright() {
    return (
        <Typography variant="body2" color="whitesmoke">
            {"Copyright © "}
            <a color="inherit" href="https://mui.com/" className="linkStyle">
                TrendSphere
            </a>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const defaultTheme = createTheme();
const Footer = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "60vh",
                    background: "#232F3E",
                    color: "white",
                }}
            >
                <CssBaseline />
                <Container>
                    <Grid container spacing={3}>
                        <Grid item sm={6} md={6} lg={3}>
                            <Typography
                                variant="h5"
                                sx={{ margin: "15px" }}
                                style={{ fontSize: "20px", fontWeight: "500" }}
                            >
                                About
                            </Typography>
                            <Typography variant="h6" sx={{ margin: "15px" }}>
                                <a style={{ fontSize: "15px" }} to="/about-us" className="linkStyle cursor-pointer">
                                    About us
                                </a>
                            </Typography>
                            <Typography variant="h6" sx={{ margin: "15px" }}>
                                <a style={{ fontSize: "15px" }} to="/contact-us" className="linkStyle">
                                    Contact us
                                </a>
                            </Typography>
                        </Grid>
                        <Grid item sm={6} md={6} lg={3}>
                            <Typography
                                variant="h5"
                                sx={{ margin: "15px" }}
                                style={{ fontSize: "20px", fontWeight: "500" }}
                            >
                                Help
                            </Typography>
                            <Typography variant="h6" sx={{ margin: "15px" }}>
                                <a style={{ fontSize: "15px" }} to="/payment" className="linkStyle">
                                    Payments
                                </a>
                            </Typography>
                            <Typography variant="h6" sx={{ margin: "15px" }}>
                                <a style={{ fontSize: "15px" }} to="/faq" className="linkStyle">
                                    FAQ
                                </a>
                            </Typography>
                            <Typography variant="h6" sx={{ margin: "15px" }}>
                                <a style={{ fontSize: "15px" }} to="/site-map" className="linkStyle">
                                    Sitemap
                                </a>
                            </Typography>
                        </Grid>
                        <Grid item sm={6} md={6} lg={3}>
                            <Typography
                                variant="h5"
                                sx={{ margin: "15px" }}
                                style={{ fontSize: "20px", fontWeight: "500" }}
                            >
                                Consumer Policy
                            </Typography>
                            <Typography variant="h6" sx={{ margin: "15px" }}>
                                <a style={{ fontSize: "15px" }} to="/terms-of-use" className="linkStyle">
                                    Terms Of Use
                                </a>
                            </Typography>
                            <Typography variant="h6" sx={{ margin: "15px" }}>
                                <a style={{ fontSize: "15px" }} to="/privacy-policy" className="linkStyle">
                                    Privacy
                                </a>
                            </Typography>
                            <Typography variant="h6" sx={{ margin: "15px" }}>
                                <a style={{ fontSize: "15px" }} to="/security" className="linkStyle">
                                    Security
                                </a>
                            </Typography>
                        </Grid>
                        <Grid item sm={6} md={6} lg={3}>
                            <Typography
                                variant="h5"
                                sx={{ margin: "15px" }}
                                style={{ fontSize: "20px", fontWeight: "500" }}
                            >
                                Mail us
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ margin: "15px" }}
                                style={{ fontSize: "15px" }}
                            >
                                TheTrendSphereCompany
                            </Typography>
                            <Typography
                                variant="h7"
                                sx={{ margin: "15px" }}
                                style={{ display: "flex", fontSize: "15px" }}
                            >
                                <MailIcon />
                                trendsphere@gmail.com
                            </Typography>
                        </Grid>
                        <Grid item sm={6} md={6} lg={3}>
                            <Typography
                                variant="h5"
                                sx={{ margin: "15px" }}
                                style={{ fontSize: "20px", fontWeight: "500" }}
                            >
                                Follow us
                            </Typography>
                            <Typography variant="h7" sx={{ margin: "15px" }}>
                                <a to="/" className="icn">
                                    <Instagram />
                                </a>
                            </Typography>
                            <Typography variant="h7" sx={{ margin: "15px" }}>
                                <a to="/" className="icn">
                                    <Facebook />
                                </a>
                            </Typography>
                            <Typography variant="h7" sx={{ margin: "15px" }}>
                                <a to="/" className="icn">
                                    <Twitter />
                                </a>
                            </Typography>
                            <Typography variant="h7" sx={{ margin: "15px" }}>
                                <a to="/" className="icn">
                                    <LinkedIn />
                                </a>
                            </Typography>
                        </Grid>
                        <Grid item sm={6} md={6} lg={3}>
                            <Typography
                                variant="h5"
                                sx={{ margin: "15px" }}
                                style={{ fontSize: "20px", fontWeight: "500" }}
                            >
                                Secure Payment Gateway
                            </Typography>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img
                                    src={SecurePaymentImage}
                                    alt="Secure Payment Gateway"
                                    style={{ width: "60px", height: "40px", marginLeft: "17px" }}
                                />
                                <img
                                    src={SecurePaymentImage1}
                                    alt="Secure Payment Gateway"
                                    style={{ width: "60px", height: "40px", marginLeft: "3px" }}
                                />
                                <img
                                    src={SecurePaymentImage2}
                                    alt="Secure Payment Gateway"
                                    style={{ width: "60px", height: "40px", marginLeft: "3px" }}
                                />
                                <img
                                    src={SecurePaymentImage3}
                                    alt="Secure Payment Gateway"
                                    style={{ width: "60px", height: "40px", marginLeft: "3px" }}
                                />
                            </div>
                        </Grid>

                        <Grid item sm={3} md={2} lg={2} xs={4}>
                            
                                <img src={websitelogo} alt="sitelogo" />
                            
                            <Typography
                                variant="h5"
                                sx={{ margin: "15px" }}
                                style={{ fontSize: "15px", fontWeight: "bold" }}
                            >
                                Discover, Shop, Smile
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Box
                    component="footer"
                    sx={{
                        textAlign: "center",
                        py: 1.4,
                        px: 1.4,
                        mt: "2%",
                        backgroundColor: (theme) =>
                            theme.palette.mode === "#37475A"
                                ? theme.palette.grey[400]
                                : theme.palette.grey[800],
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography variant="body2"></Typography>
                        <Copyright />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Footer
