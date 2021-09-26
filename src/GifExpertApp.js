import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GiftGrid } from './Components/GiftGrid';

const GifExpertApp = ()=>{
   // const categorias = ['Dragon ball','One punch','Naruto'];
  
   const [categories, setCategories] = useState(['Goku']);
   /*
   const add = ()=>{

    setCategories([ 'kakaroto', ...categories]);
    setCategories(cats =>[ 'kakaroto', ...categories] );
   }*/
        return(
            <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories= {setCategories} />

            <hr />
            
           <ol>
               {categories.map(category =>
               
               (<GiftGrid
                key={category}
                category= {category} /> ) )      

               }
             
           </ol>

            </>
        );
}

export default GifExpertApp; 
