import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Checkbox, FormControlLabel } from '@mui/material'; // Import components from '@mui/material' instead of '@mui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; // Import icons from '@mui/icons-material'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UserModel } from 'src/models/UserModel';
import { useStore } from 'src/stores';

function LoginPage({ handleChange }: any) {
    const paperStyle = { padding: 20, width: 300, margin: '0 auto' };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnstyle = { margin: '8px 0' };

    const initialValues = {
        username: '',
        password: '',
        remember: false,
    };

    const validationSchema = Yup.object().shape({
        // username: Yup.string().email('please enter a valid email').required('Required'),
        username: Yup.string().required("This field is required").nullable(),
        password: Yup.string().required('Required'),
    });

    const { authStore } = useStore();
    const { authenticateUser } = authStore;

    const onSubmit = (values: UserModel, props: any) => {
        console.log(values);
        authenticateUser(values);
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
        }, 2000);
    };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid className='flex-center'>
                    <Avatar style={avatarStyle} className='mr-2'>
                        <LockOutlinedIcon />
                    </Avatar>
                    <div>
                        <h2>Sign In</h2>
                    </div>
                </Grid>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
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
                <Typography className="flex-center">
                    <Link href="#">Forgot password?</Link>
                </Typography>
                <Typography className="flex-center">
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
