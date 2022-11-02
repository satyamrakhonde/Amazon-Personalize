import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const SimilarItemCard = (props) => {
  
    const imgPath = `https://d22kv7nk938ern.cloudfront.net/images/${props.CATEGORY_L1}/${props.ITEM_ID}.jpg`;
    return (
        <Card className='animate__animated animate__fadeIn' raised sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imgPath}
              alt="da"
            />
            <CardContent>
              <Typography variant='body2' color='text.primary' noWrap >

                {props.PRODUCT_NAME} - ${props.PRICE}
              </Typography>
              <Typography variant="body2" color="text.secondary" noWrap>
              {props.PRODUCT_DESCRIPTION}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button size="small" color="primary">
              Add to Cart
            </Button>
          </CardActions>
        </Card>
        // <div>
        //     {props.PRODUCT_NAME}
        // </div>
      );
}
