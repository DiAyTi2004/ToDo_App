import React, { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import LoginPage from "./LoginPage";
import Signup from "./SignUpPage";

// Import your Login and Signup components here

function AuthIndex() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = { width: 340, margin: "0px auto", backgroundImage: `url('https://marketplace.canva.com/EAD2962NKnQ/2/0/400w/canva-rainbow-gradient-pink-and-purple-virtual-background-LrNk7fAXxw8.jpg')` };
  // const backgroundStyle = {background: 'https://marketplace.canva.com/EAD2962NKnQ/2/0/400w/canva-rainbow-gradient-pink-and-purple-virtual-background-LrNk7fAXxw8.jpg' };


  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div style={{width: "100vw", height: "100vh", paddingTop: "30px", padding: "0px", background: `url('https://marketplace.canva.com/EAD2962NKnQ/2/0/400w/canva-rainbow-gradient-pink-and-purple-virtual-background-LrNk7fAXxw8.jpg')`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}>
      <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Sign In" style={{borderRadius: '15px 0px 0px 0px'}}/>

          <Tab label="Sign Up" />
        </Tabs>

        <TabPanel value={value} index={0}>
          <LoginPage />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Signup />
        </TabPanel>
      </Paper>
    </div>
  );
}

export default AuthIndex;
