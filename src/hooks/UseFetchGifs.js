import {useEffect, useState } from "react"
import {GetGift} from '../helpers/GetGift';

export const UseFetchGifs = (category)=>{
    const [state, setstate] = useState({
        data:[],
        loading:true
    });
    useEffect(() => {

            GetGift(category)

            .then(img =>{
                
                    setstate({
                        data: img ,
                        loading:false
                    });
      })  

    }, [category])
    
    /** 
    setTimeout( ()=>{
        setstate({
            data: [1,2,3,4,5],
            loading:false
        })

    },3000);
*/

    
    return state//data:[],loading:true};

}



