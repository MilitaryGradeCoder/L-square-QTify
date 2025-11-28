import styles from "./NewAlbumsSection.module.css";
import Button from "../Button/Button";
import {useState, useEffect} from 'react'
import axios from 'axios';
import AlbumCard from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";

export default function NewAlbumsSection (){
    const [newAlbums, setNewAlbums] = useState([]);
    const [show, setShow] = useState(false);

    const performAPIcall = async()=>{
        try{
        let response = await axios.get('https://qtify-backend.labs.crio.do/albums/new');
        
        setNewAlbums(response.data);
        }catch(err){
        console.log(err.response.data);
        }
    }

    const toggleView = ()=>{
        if(show === false){
            setShow(true);
        }else{
            setShow(false);
        }
    }

    useEffect((()=>{
        performAPIcall();
    }),[])

    return(<section className={styles.newAlbumSection}>
        <div className={styles.titleDiv}>
        <p className={styles.title}>New Albums</p>
        {show ? <Button Text = "Collapse" handleClick = {toggleView}/> : <Button Text = "Show all" handleClick = {toggleView}/>}
        </div>
       {show && <div className={styles.gridDiv}>
            {newAlbums.map((album)=>{
                return <div key={album.id}><Link style={{textDecoration: "none"}} to={`/AlbumDetail/:${album.id}`}><AlbumCard image = {album.image} title = {album.title} Follows = {album.follows}/></Link></div>
            })}
        </div>}
        {!show && <Carousel data={newAlbums} />}
    </section>)
}