import {Routes, Route} from 'react-router-dom';
import Landing from './Landing';
import AlbumDetail from './AlbumDetail/AlbumDetail';
import Navbar from './Navbar/Navbar';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import {SnackbarProvider} from 'notistack';
import {AllAlbumsContext} from "./Context";

function App() {
  
  
  return (<>
  
  <SnackbarProvider>
    <AllAlbumsContext>
    <Navbar />
    </AllAlbumsContext>
  <Routes>
    <Route path='/' Component={Landing}></Route>
    <Route path='/AlbumDetail/:Album_id' Component={AlbumDetail}></Route>
  </Routes>
  <AudioPlayer/>
  </SnackbarProvider>
  
  
  </>
  );
}

export default App;
