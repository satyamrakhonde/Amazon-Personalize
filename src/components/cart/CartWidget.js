import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {connect} from 'react-redux';

  

const CartWidget = (props) => {
  const [qty, setQty] = React.useState(0);
  //const { amountOfItemsInCart } = useContext(CartContext);
  React.useEffect( () =>{
    setQty(props.totQty);
   },[props.totQty]);
  

  return  (
    <Tooltip title='Cart'>
      <IconButton
        sx={{ mx: 1 }}
        aria-label='carrito'
        size='large'
        color='inherit'
        component={Link}
        to='/cart'
      >
        <Badge badgeContent={qty} color='error'>
          <ShoppingCartIcon sx={{ fontSize: 30 }} />
        </Badge>
      </IconButton>
    </Tooltip>
  ) ;
};

const mapStateToProps = (state) => {
  return {
    totQty: state.cart.totQty,
  }
}

export default connect(mapStateToProps) (CartWidget);


