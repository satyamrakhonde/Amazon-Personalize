import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { loadState } from '../../redux/localStorage';
import {connect} from 'react-redux';
import {addToCart,viewItem} from '../../redux/actions';

const Item = (props) => {
  const imgPath = `https://d22kv7nk938ern.cloudfront.net/images/${props.CATEGORY_L1}/${props.ITEM_ID}.jpg`;
  const navigate = useNavigate();
  const handleNavigation = () => {
   props.viewItem(props);
    navigate(`/itemDetail`);
    postEvents('View');
  };
  const addHandler = () => {
    props.addToCart(props);
    postEvents('AddToCart');
  };

  const postEvents = (eventType) => {
    let storedState = loadState();
    let url = `http://localhost:3002/api/postEvents/${props.ITEM_ID}/${storedState.user.USER_ID}/${eventType}`;
    fetch(url)
      .then(response => console.log(response.json()));
  };

  return (
    <Card className='animate__animated animate__fadeIn' raised>
      <CardActionArea>
        <CardMedia
          component='img'
          height='180 '
          image={imgPath}
          alt={props._id}
          onClick={handleNavigation}
        />
        <CardContent>
          <Typography variant='body2' color='text.primary' noWrap sx={{fontWeight:'bold', textTransform: 'uppercase'}}>
            {props.PRODUCT_NAME} - ${props.PRICE}
          </Typography>
          <Typography variant='body2' color='text.secondary' noWrap>
            {props.PRODUCT_DESCRIPTION}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
        {props.EVENT_TYPE ? 
          <Typography variant='body2' color='text.primary' noWrap sx={{ textTransform: 'uppercase'}}>
           Interaction Type: {props.EVENT_TYPE}
          </Typography>
        : 
          <Button size='small' sx={{color:'blue'}} onClick={addHandler}>
            ADD TO CART
          </Button>
        }
        
      </CardActions>
    </Card>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    viewItem: (item) => dispatch(viewItem(item)),
  }
}

export default connect(null,mapDispatchToProps)(Item);