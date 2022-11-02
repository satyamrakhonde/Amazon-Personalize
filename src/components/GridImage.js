import { Grid } from '@mui/material';
import React from 'react'

const GridImage = (props) => {

    const imgPath = `https://d22kv7nk938ern.cloudfront.net/images/${props.CATEGORY_L1}/${props.ITEM_ID}.jpg`;
  return (
    <Grid item xs={6}>
                <img
                src={imgPath}
                  alt=""
                  width="100%"
                />
                <span>{props.PRODUCT_NAME}</span>
              </Grid> 
  )
}

export default GridImage