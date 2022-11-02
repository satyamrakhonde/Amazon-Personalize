import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import GridImage from "./GridImage";

const CreateBox = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3002/api/getItems`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length !== 0) {
          setItems(data);
        }
      });
  });

  

  return (
    <div>
      <Container sx= {{margin: "30px"}}>
        <Box sx={{ width: "80%", p: 3 }} style={{ background: "#f7f6f6" }}>
          <div style={{ fontSize: "27px", fontWeight: "600" }}>
            {/* 50% - 77% off | Men's Fashion */}
            Choose the products From
          </div>
          <Grid
            sx={{ pt: 2 }}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {items.slice(0, 4).map((item) => (
              <GridImage {...item} />
            ))}
          </Grid>

          <Box sx={{ pt: 5 }} style={{ fontWeight: "500", color: "blue" }}>
              See all offers
            </Box>
        </Box>
      </Container>
    </div>
  );
};

export default CreateBox;
