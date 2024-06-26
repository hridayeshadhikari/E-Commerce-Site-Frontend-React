import * as React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import sitelogo from "../Assets/trendsphere-high-resolution-logo-transparent.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Auth/Action";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const defaultTheme = createTheme();


const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const success = useSelector((state) => state.auth.success);

  const [showError, setShowError] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("userdata", values);
    setSubmitting(false);
    dispatch(login(values));
    setShowError(true);
  };

  useEffect(() => {
    if (error && showError) {
      toast.error("Invalid email or password", {
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
    if (success && showError) {
      toast.success("Login successful", {
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
  }, [error, showError, success]);


  return (
    <div className="mb-[4rem]">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="mb-4">
              <img className="h-[4rem] " src={sitelogo} alt="" />
            </div>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Formik
              initialValues={{ email: "", password: "", terms: false }}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                setShowError(true); 
                handleSubmit(values, actions);
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form noValidate>
                  <Box component="div" sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          error={errors.email && touched.email}
                          helperText={
                            errors.email && touched.email && errors.email
                          }
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
                          error={errors.password && touched.password}
                          helperText={
                            errors.password &&
                            touched.password &&
                            errors.password
                          }
                        />
                      </Grid>
                      
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      disabled={isSubmitting}
                    >
                      Login
                    </Button>
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
                          New To TrendSphere ?{" "}
                          <button
                            className="cursor-pointer underline text-blue-600"
                            onClick={() => navigate("/signup")}
                          >
                            Sign up
                          </button>
                        </p>
                      </Grid>
                    </Grid>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
