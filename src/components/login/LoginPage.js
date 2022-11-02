import { Divider, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
// import UserSelector from "./UserSelector";
import NewuserLogin from "./NewuserLogin";
import NavBar from "../NavBar/NavBar";
import ExistUserLogin from "./ExistUserLogin";

const LoginPage = () => {
  return (
    <div>
      <NavBar showCart={false} />
      <Grid
        sx={{ pt: 4 }}
        container
        // rowSpacing={1}
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          {/* <UserSelector title='Sign In for Existing Users'/> */}
          <ExistUserLogin title='Sign In for Existing Users'/>
        </Grid>
        {/* <Grid item xs={1}> */}
        {/* <Divider orientation="vertical" flexItem/> */}
        {/* </Grid> */}
        <Grid item xs={6}>
          {/* <UserSelector/> */}
          <NewuserLogin title='Sign In for New Users'/>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default LoginPage;
