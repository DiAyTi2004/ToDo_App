import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button, Checkbox, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'; // Import components from '@mui/material' instead of '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'; // Import icons from '@mui/icons-material'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { UserModel } from 'src/models/UserModel';
import * as Yup from 'yup';

const Signup = () => {
    const paperStyle = { padding: 20, margin: '0 auto', borderRadius: '0px 0px 15px 15px'};
    const headerStyle = { margin: 0 };
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

    const onSubmit = (values: UserModel, props: any) => {
        console.log(values);
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
        }, 2000);
    };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid container spacing={2} className='flex-center'>
                    <Grid item xs={12} className='flex-center'>
                        <Avatar style={avatarStyle} className='mr-2'>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <div>
                            <Typography style={headerStyle}><h2>Sign Up</h2> </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                        >
                            {(props: any) => (
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
                                                {props.isSubmitting ? 'Loading' : 'Sign Up'}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </Paper >
        </Grid >
    );
};

export default Signup;
