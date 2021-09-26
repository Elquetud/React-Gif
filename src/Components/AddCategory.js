import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setstate] = useState('')
    
    const cambioInput = (e)=>{
       setstate(e.target.value);
       
    }
    const handleSubmit= (e)=>{
        e.preventDefault();

        if(inputValue.trim().length >= 2){
            setCategories(cats =>[ inputValue, ...cats] );
            setstate('');
        }
        
        //console.log('Submit hecho');
        
    }
    return (
         
           <form  onSubmit={handleSubmit}> 
            <input 
            type="text"
            value={inputValue}
            onChange={cambioInput}
              />
            </form>
        
    )
}
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
