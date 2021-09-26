//import React, { useEffect, useState } from 'react'
import React  from 'react';
import { UseFetchGifs } from '../hooks/UseFetchGifs';
//import { getGift } from '../helpers/GetGift';
import { GiftItem } from './GiftItem';

export const GiftGrid = ({category}) => {
    
  const {data, loading} = UseFetchGifs(category);

  //console.log(sate);
  console.log(loading);
  

    /*
    const [images, setimages] = useState([])

    
    useEffect(()=>{
       getGift(category).then(setimages)

    },[category]);
    */ 
 /* 
    const getGift = async()=>{ //funcion de async 
        const url = `https://api.giphy.com/v1/gifs/search?api_key=TzAZbsVYxhqPt89UI9sHOy530jLw3JjV&q=${encodeURI(category)}&limit=15`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        const giftl = data.map(img =>{
            return {
                id: img.id ,
                title: img.title,
                url : img.images.downsized_medium.url,
                
            }
        })
        console.log(giftl);
        setimages(giftl);


    }*/
    //getGift();

    return (
        <>
        <h3 className="animate__animated animate__fadeInDownBig"> {category} </h3>
        {loading && <p className="animate__animated animate__flash">Loading</p>}

          <div className="card-grid">
               {   
                   data.map(img =>
                    ( <GiftItem key={img.id}  {...img } /> ))

               }
          
            </div>
             
        </>
    )
    
}
