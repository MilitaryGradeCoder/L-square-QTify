import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import styles from './Card.module.css';
import { flex, justifyContent } from '@mui/system';


export default function AlbumCard({image, title, Follows}) {
    console.log(image)
    console.log(title)
    console.log(Follows)
  return (<>
    <Card sx={{ maxWidth: 159, height: 205 }}>
      <CardActionArea>
        <CardMedia
        component="img"
        alt={title}
        height="170"
        image={image}
      />
      <div className={styles.chipArea}>
          <Chip sx={{backgroundColor: "#121212",
             height: "23px",
              fontFamily: "Poppins",
               fontSize: "10px",
                fontWeight: 400,
                 color: "#FFFFFF"
                 }} label= {`${Follows} Follows`}/>
        </div>
      </CardActionArea>
      </Card>
        <div className={styles.cardText}>
          {/* New Bollywood */}
          {title}
        </div>
      </>
    
  );
}
