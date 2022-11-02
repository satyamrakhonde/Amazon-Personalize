import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import CartWidget from '../cart/CartWidget';

import NavList from './NavList';
import { loadState } from '../../redux/localStorage';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Tabbar from '../Tabbar';

const NavBar = (props) => {
  const storeState = loadState();
  const navigate = useNavigate();

  const pages = props.page === 'items' ? ['Transactions'] : ['Back'] ;
  const signout = () => {
    localStorage.clear();
    navigate('/');
  }
  
  return (    
      <AppBar position='sticky' >
        <Container maxWidth='xm' sx={{ bgcolor: '#494949' }}>
          
          <Toolbar disableGutters>
            <div sx={{fontFamily:"Helvetica"}} style={{fontSize:20,minWidth:250}}>
              PERSONALIZED SHOPPING 
            </div>
            { props.showCart ? 
             <>
              <Container maxWidth='xm' disableGutters >
              </Container>
              <NavList pages={pages} view={props.page}  />
              
              <CartWidget />
              <div sx={{fontFamily:"Helvetica"}} style={{fontSize:12,minWidth:100, wordWrap:true}} >
                UserId:{storeState.user.USER_ID} Age:{storeState.user.AGE} Gender:{storeState.user.GENDER}
                <div>
                  <Button sx={{fontFamily:"Helvetica", fontSize:10}} onClick={signout}>Signout</Button>
                </div>
            </div>
              </>
             : null
            }
          </Toolbar>
        </Container>
        { props.page === 'items' ? <Tabbar /> : null}
      </AppBar>
  );
};

export default NavBar;