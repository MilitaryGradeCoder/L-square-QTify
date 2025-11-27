import {Routes, Route} from 'react-router-dom';
import Landing from './Landing';
import AlbumDetail from './AlbumDetail/AlbumDetail';
import Navbar from './Navbar/Navbar';
import AudioPlayer from './AudioPlayer/AudioPlayer';

function App() {
  
  return (<>
    <Navbar/>
  <Routes>
    <Route path='/' Component={Landing}></Route>
    <Route path='/AlbumDetail/:Album_id' Component={AlbumDetail}></Route>
  </Routes>
  <AudioPlayer/>
  </>
  );
}

export default App;
