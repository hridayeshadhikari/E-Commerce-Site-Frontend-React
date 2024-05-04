import * as React from "react";
import { useState, useEffect } from "react"; // Import useState and useEffect
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import sitelogo from "../Assets/trendsphere-high-resolution-logo-transparent.png";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../Redux/Auth/Action";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const defaultTheme = createTheme();

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  terms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (values) => {
    setShowError(true);
    dispatch(signup(values));
  };

  useEffect(() => {
    if (error && showError) {
      toast.error(error, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [error, showError]);

  return (
    <div className="mb-[4rem]">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="mb-4">
              <img className="h-[4rem] " src={sitelogo} alt="" />
            </div>
            <div className="mb-4">
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
            </div>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                terms: false,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Field as={Checkbox} name="terms" color="primary" />
                        }
                        className="text-xs"
                        label="Terms & conditions"
                        error={touched.terms && Boolean(errors.terms)}
                      />
                      {touched.terms && errors.terms && (
                        <Typography variant="body2" color="error">
                          {errors.terms}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                </Form>
              )}
            </Formik>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <p className="text-sm text-black-600">
                  Already have an account ?{" "}
                  <button
                    className="cursor-pointer text-blue-600 underline"
                    onClick={() => navigate("/login")}
                  >
                    Sign in
                  </button>
                </p>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
