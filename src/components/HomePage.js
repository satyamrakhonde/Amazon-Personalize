import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import CreateBox from "./CreateBox";
import NavBar from "./NavBar/NavBar";

const HomePage = () => {
  const [items, setItems] = useState([]);
  //   const loadItems = () => {
  //     fetch(`http://localhost:3002/api/getItems`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.length !== 0) {
  //           setItems(data);
  //         }
  //       });
  //   };

  return (
    <>
      <NavBar />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {/* <Box sx={{ p: 4 }}>
            <h4>Frequently Purchased Item</h4>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                1<img></img>
              </Grid>
              <Grid item xs={6}>
                2
              </Grid>
              <Grid item xs={6}>
                3
              </Grid>
              <Grid item xs={6}>
                4
              </Grid>
            </Grid>
          </Box> */}
          {/* {
            items.slice(0,3).map((item) => (
                <CreateBox {...item}/>
            ))
          } */}
          <CreateBox />
        </Grid>
        <Grid item xs={4}>
        
          
          
          {/* <Box sx={{ width: "80%", p: 3 }} style={{ background: "#f7f6f6" }}>
            <div style={{ fontSize: "27px", fontWeight: "600" }}>
              50% - 77% off | Men's Fashion
              Choose the products From
            </div>
            <Grid
              sx={{ pt: 2 }}
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <img
                  src="https://lastfm.freetls.fastly.net/i/u/avatar170s/a63be9c802e2731c97430db5b9adf926"
                  alt=""
                  width="100%"
                />
                <span>Product 1</span>
              </Grid>
              <Grid item xs={6}>
                <img
                  src="https://lastfm.freetls.fastly.net/i/u/avatar170s/a63be9c802e2731c97430db5b9adf926"
                  alt=""
                  width="100%"
                />
                <span>Product 2</span>
              </Grid>
              <Grid item xs={6} sx={{ mt: 4 }}>
                <img
                  src="https://lastfm.freetls.fastly.net/i/u/avatar170s/a63be9c802e2731c97430db5b9adf926"
                  alt=""
                  width="100%"
                />
                <span>Product 3</span>
              </Grid>
              <Grid item xs={6} sx={{ mt: 4 }}>
                <img
                  src="https://lastfm.freetls.fastly.net/i/u/avatar170s/a63be9c802e2731c97430db5b9adf926"
                  alt=""
                  width="100%"
                />
                <span>Product 4</span>
              </Grid>
            </Grid>

            <Box sx={{ pt: 5 }} style={{ fontWeight: "500", color: "blue" }}>
              See all offers
            </Box>
          </Box> */}
          <CreateBox />
        </Grid>
        <Grid item xs={4}>
          {/* Go to Cart directly */}
          <CreateBox />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
