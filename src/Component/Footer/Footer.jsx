import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import { LinkedIn } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import SecurePaymentImage from "../../Assets/Razorpay_logo.webp";
import SecurePaymentImage1 from "../../Assets/pay-pal.png";
import SecurePaymentImage2 from "../../Assets/upi-icn.png";
import SecurePaymentImage3 from "../../Assets/visa-icn.png";
import websitelogo from "../../Assets/trendsphere-high-resolution-logo-transparent.png";

function Copyright() {
  return (
    <Typography variant="body2" color="whitesmoke">
      {"Copyright © "}
      <Link color="inherit" to="https://mui.com/" className="linkStyle">
        TrendSphere
      </Link>{" "}
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
                style={{ fontSize: "18px", fontWeight: "700" }}
              >
                About
              </Typography>
              <Typography variant="h5" sx={{ margin: "15px" }}>
                <Link
                  style={{ fontSize: "13px" }}
                  to="/"
                  className="linkStyle cursor-pointer"
                >
                  About us
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ margin: "15px" }}>
                <Link style={{ fontSize: "13px" }} to="/" className="linkStyle">
                  Contact us
                </Link>
              </Typography>
            </Grid>
            <Grid item sm={6} md={6} lg={3}>
              <Typography
                variant="h5"
                sx={{ margin: "15px" }}
                style={{ fontSize: "18px", fontWeight: "700" }}
              >
                Help
              </Typography>
              <Typography variant="h6" sx={{ margin: "15px" }}>
                <Link
                  style={{ fontSize: "13px" }}
                  to="/paymentf"
                  className="linkStyle"
                >
                  Payments
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ margin: "15px" }}>
                <Link
                  style={{ fontSize: "13px" }}
                  to="/faq"
                  className="linkStyle"
                >
                  FAQ
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ margin: "15px" }}>
                <Link
                  style={{ fontSize: "13px" }}
                  to="/site-map"
                  className="linkStyle"
                >
                  Sitemap
                </Link>
              </Typography>
            </Grid>
            <Grid item sm={6} md={6} lg={3}>
              <Typography
                variant="h5"
                sx={{ margin: "15px" }}
                style={{ fontSize: "18px", fontWeight: "700" }}
              >
                Consumer Policy
              </Typography>
              <Typography variant="h6" sx={{ margin: "15px" }}>
                <Link
                  style={{ fontSize: "13px" }}
                  to="/terms-of-use"
                  className="linkStyle"
                >
                  Terms Of Use
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ margin: "15px" }}>
                <Link
                  style={{ fontSize: "13px" }}
                  to="/privacy-policy"
                  className="linkStyle"
                >
                  Privacy
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ margin: "15px" }}>
                <Link
                  style={{ fontSize: "13px" }}
                  to="/security"
                  className="linkStyle"
                >
                  Security
                </Link>
              </Typography>
            </Grid>
            <Grid item sm={6} md={6} lg={3}>
              <Typography
                variant="h5"
                sx={{ margin: "15px" }}
                style={{ fontSize: "18px", fontWeight: "700" }}
              >
                Mail us
              </Typography>
              <Typography
                variant="h6"
                sx={{ margin: "15px" }}
                style={{ fontSize: "13px" }}
              >
                TheTrendSphereCompany
              </Typography>
              <Typography
                variant="h7"
                sx={{ margin: "15px" }}
                style={{ display: "flex", fontSize: "13px" }}
              >
                <MailIcon className="mr-2" />
                trendsphere@gmail.com
              </Typography>
            </Grid>
            <Grid item sm={6} md={6} lg={3}>
              <Typography
                variant="h5"
                sx={{ margin: "15px" }}
                style={{ fontSize: "18px", fontWeight: "700" }}
              >
                Connect Us Here
              </Typography>
              <Typography variant="h7" sx={{ margin: "15px" }}>
                <a href="instagram.com" target="blank" className="icn">
                  <Instagram />
                </a>
              </Typography>
              <Typography variant="h7" sx={{ margin: "15px" }}>
                <a href="facebook.com" target="blank" className="icn">
                  <Facebook />
                </a>
              </Typography>
              <Typography variant="h7" sx={{ margin: "15px" }}>
                <a href="twitter.com" target="blank" className="icn">
                  <XIcon />
                </a>
              </Typography>
              <Typography variant="h7" sx={{ margin: "15px" }}>
                <a href="linkedin.com" target="blank" className="icn">
                  <LinkedIn />
                </a>
              </Typography>
            </Grid>
            <Grid item sm={6} md={6} lg={3}>
              <Typography
                variant="h5"
                sx={{ margin: "15px" }}
                style={{ fontSize: "18px", fontWeight: "700" }}
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
                style={{ fontSize: "13px", fontWeight: "bold" }}
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
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body2"></Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
