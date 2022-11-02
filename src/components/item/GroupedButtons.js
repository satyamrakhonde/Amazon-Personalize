import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const GroupedButtons = (props) => {
 const [counter,setCounter] = useState(0);
 React.useEffect( () =>{
    setCounter(props.resetQty);
   },[props.resetQty]);  

  const handleIncrement = () => {
    setCounter(counter+1);
    props.onQtyChange(counter+1);
    
  };
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter-1);
      props.onQtyChange(counter-1);
    }
  };
  
return (
    <ButtonGroup size="small" aria-label="small outlined button group"    
    variant="outlined"
    color="secondary"
    sx={{ p: 1, backgroundColor: 'white' }}>
    <Button onClick={handleIncrement}    >+</Button>
    {<Button >{counter}</Button>}
    {<Button onClick={handleDecrement}>-</Button>}
    </ButtonGroup>
);
  

   
}

export default GroupedButtons;