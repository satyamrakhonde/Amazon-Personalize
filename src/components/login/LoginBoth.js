import * as React from "react";

import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Grid } from "@mui/material";

import NavBar from "../NavBar/NavBar";

import "./styles.css";
import store from "../../redux/store";
import { saveState } from "../../redux/localStorage";
import { login, addToCart, updateLastView } from "../../redux/actions";
import { connect } from "react-redux";
import { Typography } from "@mui/material";

store.subscribe(() => {
  saveState({
    user: store.getState().user.user,
    cart: store.getState().cart.cart,
    totQty: store.getState().cart.totQty,
    item: store.getState().item.item,
  });
});

const LoginBoth = (props, login, logout) => {
  const navigate = useNavigate();
  const [userType, setUserType] = React.useState("");
  const [users, setUsers] = React.useState([]);

  const handleChange = (event) => {
    localStorage.clear();
    setUserType(event.target.value);
    fetch(`http://localhost:3002/api/${event.target.value}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  };

  const loginUser = (event) => {
    let loggedInUser = event.target.value;
    props.login(loggedInUser);
    signUpUser(loggedInUser);
    navigate(`/items`);
  };

  const signUpUser = (user) => {
    if (user.USED === "N") {
      fetch(`http://localhost:3002/api/signupUser/${user.USER_ID}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <div>
      {/* <NavBar showCart={false} /> */}
      <div class="container">
        <div class="screen">
          <div class="screen__content">
            
            {/* <FormControl sx={{ m: 1, minWidth: 300 }}>
                  <InputLabel
                    id="demo-simple-select-helper-label"
                  >
                    Select User Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={userType}
                    label="Selected User Type"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"getNewUsers"}>New User</MenuItem>
                    <MenuItem value={"getUsersWithTransaction"}>
                      Existing User
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div class="login__field">
                <FormControl sx={{ m: 1, minWidth: 300 }}>
                  <InputLabel id="user">Select User</InputLabel>
                  <Select
                    labelId="user"
                    id="user"
                    label="Selected User"
                    onChange={loginUser}
                  >
                    {users.map((user, index) => (
                      <MenuItem value={user} key={user.USER_ID}>
                        {user.USER_ID} {user.AGE} {user.GENDER}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl> */}
            <Grid container>
              <Grid item xs={6}>
                <form class="login">
                  <div class="login__field">
                    <Typography
                      fontFamily="Helvetica"
                      padding={3}
                      align="left"
                      fontWeight={"bold"}
                      fontSize={22}
                    >
                      {/* Sign In */}
                      {props.title}
                    </Typography>

                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Select User Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={userType}
                        label="Selected User Type"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"getNewUsers"}>New User</MenuItem>
                        <MenuItem value={"getUsersWithTransaction"}>
                          Existing User
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div class="login__field">
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="user">Select User</InputLabel>
                      <Select
                        labelId="user"
                        id="user"
                        label="Selected User"
                        onChange={loginUser}
                      >
                        {users.map((user, index) => (
                          <MenuItem value={user} key={user.USER_ID}>
                            {user.USER_ID} {user.AGE} {user.GENDER}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </form>
              </Grid>
              <Grid item xs={6}>
                <form class="login">
                  <div class="login__field">
                    <Typography
                      fontFamily="Helvetica"
                      padding={3}
                      align="left"
                      fontWeight={"bold"}
                      fontSize={22}
                    >
                      {/* Sign In */}
                      {props.title}
                    </Typography>

                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Select User Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={userType}
                        label="Selected User Type"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"getNewUsers"}>New User</MenuItem>
                        <MenuItem value={"getUsersWithTransaction"}>
                          Existing User
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div class="login__field">
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="user">Select User</InputLabel>
                      <Select
                        labelId="user"
                        id="user"
                        label="Selected User"
                        onChange={loginUser}
                      >
                        {users.map((user, index) => (
                          <MenuItem value={user} key={user.USER_ID}>
                            {user.USER_ID} {user.AGE} {user.GENDER}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </form>
              </Grid>
            </Grid>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(null, mapDispatchToProps)(LoginBoth);
