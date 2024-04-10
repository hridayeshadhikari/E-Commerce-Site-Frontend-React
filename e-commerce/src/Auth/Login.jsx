import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import sitelogo from "../Assets/trendsphere-high-resolution-logo-transparent.png";
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Auth/Action';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const defaultTheme = createTheme();

// Define Yup schema for validation
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    terms: Yup.boolean().oneOf([true], 'Must accept terms and conditions')
});

export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values, { setSubmitting }) => {

        console.log("userdata", values);
        setSubmitting(false);
        setTimeout(() => {
            dispatch(login(values));
        }, 2000);
        toast.success('Login Successful', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        
    };

    return (
        <div className='mb-[4rem]'>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 6,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <div className='mb-4'>
                            <img className='h-[4rem] ' src={sitelogo} alt="" />
                        </div>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Formik
                            initialValues={{ email: '', password: '', terms: false }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
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
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={<Field as={Checkbox} name="terms" color="primary" />}
                                                    label="Terms & conditions."
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
                                            Sign in
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
                                                <p className='text-sm text-blue-600'>
                                                    Don't have an account? <button className="cursor-pointer hover:underline" onClick={() => navigate("/signup")}>Sign up</button>
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
