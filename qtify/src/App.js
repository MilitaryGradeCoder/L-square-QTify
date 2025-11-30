import {Routes, Route} from 'react-router-dom';
import Landing from './Landing';
import AlbumDetail from './AlbumDetail/AlbumDetail';
import Navbar from './Navbar/Navbar';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import {SnackbarProvider} from 'notistack';
import allAlbums from "./Context";
import Data from './ApiCalling';

function App() {
  
  
  return (<>
  <allAlbums.Provider value={Data}>
  <SnackbarProvider>
    <Navbar searchData = {Data}/>
  <Routes>
    <Route path='/' Component={Landing}></Route>
    <Route path='/AlbumDetail/:Album_id' Component={AlbumDetail}></Route>
  </Routes>
  <AudioPlayer/>
  </SnackbarProvider>
  </allAlbums.Provider>
  </>
  );
}

export default App;
