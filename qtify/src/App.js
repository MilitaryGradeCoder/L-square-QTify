import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import AlbumCard from './Card/Card';
import Section from './Section/Section';

function App() {
  return (
    <>
    {/* <div>Hello</div> */}
    <Navbar />
    <Hero />
    <Section />
    {/* <Routes>
      
    </Routes> */}
    </>
  );
}

export default App;
