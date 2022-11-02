import * as React from 'react';
import Grid from '@mui/material/Grid';
import NavBar from '../NavBar/NavBar';
import { saveState } from '../../redux/localStorage';
import Tabbar from '../Tabbar';
import Item from '../item/Item';
import {connect} from 'react-redux';
import store from '../../redux/store';
import {updateLastView} from '../../redux/actions';

store.subscribe(() => {
  saveState({
    lastView:store.getState().lastView.lastView,
  });
});



const Products = (props,updateLastView) => {  
 
  let selectedUser = props.selectedUser;
  const [items, setItems] = React.useState([]);
  React.useEffect( () =>{
    setItems([]);
    fetchData();
  },[props.lastView,props.page]);


  const fetchData = () => {
    if (props.page === 'items') {
      if (props.lastView !== undefined 
        && props.lastView !== '' && 
        (props.lastView !== 'homepage' && props.lastView !== 'items')) {
        loadItemByCategory(props.lastView);
      } else {
        loadRecommendations();
      }
    }else {
        loadInteractions();
    }
  }

  const loadInteractions = () => {
    console.log('interactions')
        fetch(`http://localhost:3002/api/getInteractions/${selectedUser.USER_ID}`)
       .then(response => response.json())
          .then(data =>  {
            if ( data.interactionItems.length !== 0) {
              setItems(data.interactionItems)
            } 
          });
  }

  const   loadRecommendations = () => {
    fetch(`http://localhost:3002/api/getRecommendation/${selectedUser.USER_ID}`)
    .then(response => response.json())
          .then(data =>  {
            if ( data.length !== 0) {
              setItems(data);
            } else {
              loadItems();
          }});
    }
  

  const loadItems = () => {
    fetch(`http://localhost:3002/api/getItems`)
  .then(response => response.json())
        .then(data =>  {
          if ( data.length !== 0) {
            setItems(data);
          } 
        });
      };

      const loadItemByCategory = (category) => {
        fetch(`http://localhost:3002/api/getPersonalizedItems/${category}/${selectedUser.USER_ID}`)
      .then(response => response.json())
            .then(data =>  {
              if ( data.length !== 0) {
                setItems(data);
              } 
            });
      };

  
  
    
return (
  <>
  
    
    <NavBar showCart={true} page={props.page} />
    
   
    <Grid container spacing={4} py={3} padding={5}>
      {items?.map((item) => (
        <Grid item xs={12} sm={6} lg={3} key={item.id}>
          <Item {...item} source={0}/>
        </Grid>
      ))}
    </Grid>
  </>);
};

const mapStateToProps = (state) => {
  return {
    selectedUser: state.user.user,
    lastView: state.lastView.lastView,  
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateLastView: (lastView) => dispatch(updateLastView(lastView)),
  }
}

export default connect (mapStateToProps,mapDispatchToProps) (Products);

