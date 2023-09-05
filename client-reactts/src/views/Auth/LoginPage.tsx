import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Checkbox, FormControlLabel } from '@mui/material'; // Import components from '@mui/material' instead of '@mui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; // Import icons from '@mui/icons-material'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function LoginPage({ handleChange }: any) {
    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: '0 auto' };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnstyle = { margin: '8px 0' };
    const initialValues = {
        username: '',
        password: '',
        remember: false,
    };
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter a valid email').required('Required'),
        password: Yup.string().required('Required'),
    });
    const onSubmit = (values, props) => {
        console.log(values);
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
        }, 2000);
    };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid className='flex-center'>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        label="Username"
                                        name="username"
                                        placeholder="Enter username"
                                        fullWidth
                                        required
                                        helperText={<ErrorMessage name="username" />}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        label="Password"
                                        name="password"
                                        placeholder="Enter password"
                                        type="password"
                                        fullWidth
                                        required
                                        helperText={<ErrorMessage name="password" />}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={FormControlLabel}
                                        name="remember"
                                        control={<Checkbox color="primary" />}
                                        label="Remember me"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        color="primary"
                                        variant="contained"
                                        disabled={props.isSubmitting}
                                        style={btnstyle}
                                        fullWidth
                                    >
                                        {props.isSubmitting ? 'Loading' : 'Sign in'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
                <Typography>
                    <Link href="#">Forgot password?</Link>
                </Typography>
                <Typography>
                    Do you have an account?{' '}
                    <Link href="#" onClick={() => handleChange('event', 1)}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default LoginPage;
