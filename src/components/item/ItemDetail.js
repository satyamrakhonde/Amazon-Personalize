import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import NavBar from '../NavBar/NavBar';
import {connect} from 'react-redux';
import GroupedButtons from './GroupedButtons';
import { Alert, Button } from '@mui/material';
import {addToCartBulk} from '../../redux/actions';
import { loadState, saveState } from '../../redux/localStorage';
import store from '../../redux/store';
import { SimilarItemCard } from '../SimilarItemCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../SimpleSlider';


const buttonSX = {
  "backgroundColor":"#494949",
  "&:hover": {
    backgroundColor: "black",
  },
};

store.subscribe(() => {
  saveState({
    cart:store.getState().cart.cart,
    totQty:store.getState().cart.totQty,
  });
});

const ItemDetail = (props) => {
  let item = props.item;
  const[qty,setQty] = React.useState(0);

  const updateQty = (quantity) => {
    setQty(quantity);
  }

  const [similarItems, setSimilarItems] = useState([]);
  let urlsm = `http://localhost:3002/api/getItems/${item.CATEGORY_L1}/${item.CATEGORY_L2}`;
  fetch(urlsm)
    .then((response) => response.json())
    .then((data) => {
      setSimilarItems(data);
      console.log(data);
    })

  const addToCart = () => {
    props.addToCartBulk(item,qty);
    let storedState = loadState();
    let url = `http://localhost:3002/api/postEvents/${item.ITEM_ID}/${storedState.user.USER_ID}/AddToCart`;
    alert(url)
    fetch(url)
      .then(response => console.log(response.json()));
    setQty(0);
  }
 
  const imgPath = `https://d22kv7nk938ern.cloudfront.net/images/${item.CATEGORY_L1}/${item.ITEM_ID}.jpg`;
  return (
    <>
      <NavBar showCart={true} />
      
      <Grid
        container
        mt={0}
        className='animate__animated animate__fadeIn'
        spacing={4}
        padding={2}
      >
        <Grid
          item
          sm={6}
          md={4}
          className='animate__animated animate__fadeInLeft'
        >
          <Card raised>
            <CardMedia component='img' image={imgPath} alt={item.ITEM_ID} height='400' />
          </Card>
          <Box
            display='flex'
            justifyContent='space-between'
            mt={1}
            alignContent='center'
          >
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={8} alignItems='left'>
          <Typography component='h4'  variant='h4' textAlign='left' gutterBottom  fontWeight={'bold'}>
            {item.PRODUCT_NAME}
          </Typography>
          <Divider />
          <Typography component='h6' variant='h6' textAlign='left'>
          {item.PRODUCT_DESCRIPTION}
          </Typography>
    
          <Divider sx={{ mb: 2 }} />
          <Typography  textAlign='left' paddingBottom={1} fontWeight='bold'>
             PRICE: ${item.PRICE}
            </Typography>
            
            <Box sx={{ display: 'flex', align:'left', alignitems:'flex-start', justifyContent:'flex-start' }} >
            <Typography  fontWeight='bold' textAlign='left' paddingRight={1} paddingTop={1.5}>
             QUANTITY:  
            </Typography>
              <GroupedButtons textAlign='left' onQtyChange={updateQty} resetQty={qty} /></Box>
              <Box sx={{ display: 'flex', align:'left', alignitems:'flex-start', justifyContent:'flex-start' }} >
               <Button variant='contained' sx={buttonSX}  onClick={addToCart} disabled={qty<=0}> Add to Cart </Button>
            </Box>
        </Grid>
      </Grid>

      <Divider/>

      <h2 style={{textAlign: "left", paddingLeft: "25px"}}>View Featured Products</h2>


      {/* <Grid container spacing={4} py={3} padding={5}>
        {similarItems?.map((ite) => (
          <Grid item xs={12} sm={6} lg={3} key={ite.id}>
            <SimilarItemCard {...ite} />
          </Grid>
        ))}
      </Grid> */}

      <Carousel responsive={responsive}>
       {/* <Grid container spacing={4} py={3} padding={5}> */}
          {similarItems?.map((ite) => (
            <Grid item xs={12} sm={6} lg={3} key={ite.id}>
              <SimilarItemCard {...ite} />
            </Grid>
          ))}
        {/* </Grid> */}
      </Carousel>

    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCartBulk: (items,qty) => dispatch(addToCartBulk(items,qty)),
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.item.item,
    
  }
}

export default connect (mapStateToProps,mapDispatchToProps) (ItemDetail);
