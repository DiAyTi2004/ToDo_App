import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button, Checkbox, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'; // Import components from '@mui/material' instead of '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'; // Import icons from '@mui/icons-material'

const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: '0 auto' };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const marginTop = { marginTop: 5 };

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
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset" style={marginTop}>
                                        <FormLabel component="legend">Gender</FormLabel>
                                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label='Password' placeholder="Enter your password" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox name="checkedA" />}
                                        label="I accept the terms and conditions."
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type='submit'
                                        variant='contained'
                                        color='primary'
                                        fullWidth

                                    >Sign up
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Signup;
