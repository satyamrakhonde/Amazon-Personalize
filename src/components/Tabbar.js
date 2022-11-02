import React, { useState } from 'react'; 
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import store from '../redux/store';
import { saveState } from '../redux/localStorage';
import {connect} from 'react-redux';
import {updateLastView} from '../redux/actions';
import { useNavigate } from 'react-router-dom';

store.subscribe(() => {
    saveState({
      lastView:store.getState().lastView.lastView,
    });
  });

const Tabbar = (props) => {
    const [selectedTab, setSelectedTab] = useState("homepage");
    const tabsList = ["homepage", "accessories", "apparel", "beauty", "books", "electronics", "floral", "footwear", "furniture", "groceries", "homedecor", "housewares", "instruments", "jewelry", "outdoors", "seasonal", "tools", "food service", "cold dispensed", "salty snacks", "hot dispensed"];
    const navigate = useNavigate();
    const handleTabChange = async (event, newValue) => {
        setSelectedTab(newValue);
        props.updateLastView(newValue);
        navigate('/items')
      };
      
      React.useEffect( () =>{
        props.lastView === undefined || props.lastView === '' ? setSelectedTab('homepage') : setSelectedTab(props.lastView);
       },[props.lastView]);

    

    return (
        <AppBar position="sticky" color="inherit">
            <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            aria-label="Tabs where selection follows focus"
            variant="scrollable"
            scrollButtons 
        >
            {tabsList.map((item) => (<Tab key={item} value={item} label={item} />)
            )}

        </Tabs>
      </AppBar>
    );

};

const mapDispatchToProps = dispatch => {
    return {
        updateLastView: (lastView) => dispatch(updateLastView(lastView))
    }
  }

  const mapStateToProps = (state) => {
    return {
      lastView: state.lastView.lastView,  
    }
  }
  

export default connect  (mapStateToProps, mapDispatchToProps) (Tabbar);