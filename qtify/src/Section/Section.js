import React, { use } from "react";
import styles from "./Section.module.css";
import Button from "../Button/Button";
import {useState, useEffect} from 'react'
import axios from 'axios';
import AlbumCard from "../Card/Card";


export default function Section (){
    const [topAlbums, setTopAlbums] = useState([]);

    const performAPIcall = async()=>{
        try{
        let response = await axios.get('https://qtify-backend.labs.crio.do/albums/top');
        console.log(response.data);
        setTopAlbums(response.data);
        }catch(err){
        console.log(err.response.data);
        }
    }

    useEffect((()=>{
        performAPIcall();
    }),[])

    return(<section>
        <div className={styles.titleDiv}>
        <p className={styles.title}>Top Albums</p>
        <Button Text = "Collapse"/> 
        </div>
        <div className={styles.gridDiv}>
            {topAlbums.map((album)=>{
                return <div key={album.id}><AlbumCard image = {album.image} title = {album.title} Follows = {album.follows}/></div>
            })}
        </div>
    </section>)
}