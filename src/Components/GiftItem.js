import React from 'react'

export const GiftItem = ({id,title,url}) => {

    console.log({id,title,url});

    return (
        <div className="card animate__animated animate__fadeInDownBig" >
           <img src={url} alt={title} />
            <p> {title} </p>
        </div>
    )
}
