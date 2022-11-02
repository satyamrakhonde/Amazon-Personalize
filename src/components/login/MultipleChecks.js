import React, { useState } from 'react'

const MultipleChecks = () => {

    const [fruitsArray, setFruitsArray] = useState([])
    const [name, setName] = useState('');

    const handleName = (e) => {
        const name = e.target.value;
        setName(name);
    }
    const handleChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        console.log(value, checked);
        if(checked)
        {
            setFruitsArray([
                ...fruitsArray, value
            ])
        }
        else{
            setFruitsArray(fruitsArray.filter( (e) => console.log('e =' +e, 'value =' +value) ));
            setFruitsArray(fruitsArray.filter( (e) => (e!== value) ));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fruitsArray);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name='Name' value={name} onChange={handleName}></input>

            <label htmlFor=''>Select Fruits: &nbsp;</label>

            <input type='checkbox' name='fruits' value='Apple' onChange={handleChange}></input>
            <label htmlFor=''>&nbsp; Apple</label>
            &nbsp;

            <input type='checkbox' name='fruits' value='Mango' onChange={handleChange}></input>
            <label htmlFor=''>&nbsp; Mango</label>
            &nbsp;

            <input type='checkbox' name='fruits' value='Bnanana' onChange={handleChange}></input>
            <label htmlFor=''>&nbsp; Bnanana</label>
            &nbsp;

            <input type='checkbox' name='fruits' value='Grapes' onChange={handleChange}></input>
            <label htmlFor=''>&nbsp; Grapes</label>
            &nbsp;

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default MultipleChecks