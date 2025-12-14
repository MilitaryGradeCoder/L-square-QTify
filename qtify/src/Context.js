import { Children, createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const allAlbums = createContext();

export function AllAlbumsContext({children}){

const [allAlbumsData, setAllAlbumsData] = useState([]);


const performAPICalls = async ()=>{
    try{
    let newAlbumResponse = await axios.get('https://qtify-backend.labs.crio.do/albums/new');
    let newAlbums = newAlbumResponse.data;
    let topAlbumResponse = await axios.get('https://qtify-backend.labs.crio.do/albums/top');
    let topAlbums = topAlbumResponse.data;
    let bothAlbumsData = [...newAlbums, ...topAlbums];
    setAllAlbumsData(bothAlbumsData);
    }catch(err){
        console.log("Error fetching context data", err);
    }

}

useEffect(()=>{
performAPICalls();
}, [])

return(<allAlbums.Provider value={allAlbumsData}>{children}</allAlbums.Provider>)

}


