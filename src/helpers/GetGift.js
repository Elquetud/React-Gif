
export const GetGift = async(category)=>{ //funcion de async 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TzAZbsVYxhqPt89UI9sHOy530jLw3JjV&q=${encodeURI(category)}&limit=20`;
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
    return giftl;
       // setimages(giftl);
    
}


