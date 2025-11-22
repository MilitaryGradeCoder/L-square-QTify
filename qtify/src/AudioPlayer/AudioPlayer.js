import React from 'react';
import ReactPlayer from 'react-player';
import {useState, useEffect, useRef} from 'react';
import styles from './AudioPlayer.module.css';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import poster from '../assests/songPoster.jpg';

function AudioPlayer() {
    const [play, setPlay] = useState(false);
    const ele = useRef(null)

    const handlePlay = (value)=>{
        setPlay(value);
    }

    useEffect(()=>{
        if(play === true){
            ele.current.play();
        }else{
            
        }
    }, [play])
  return (
    <div className={styles.tobeFixed}>
    <hr style={{boxShadow: '0px -2px 6px 0px #FFFFFF59'}}/>
    <div className={styles.playerDiv}>
      <img className={styles.poster} src={poster} alt='Poster'></img>
      <button onClick={()=>handlePlay(!play)} className={styles.playButton}>{play ? <PauseIcon/> : <PlayArrowIcon/>}</button>
      <ReactPlayer ref={ele} src='https://open.spotify.com/track/4blqlsA1uf2d2I40E90EUC?si=12a8fa0bcf584643' controls={false} playing={play} loop={true}/>
       </div>
       
    </div>
  );
}

export default AudioPlayer;