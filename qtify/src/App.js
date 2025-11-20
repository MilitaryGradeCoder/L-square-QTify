import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import TopAlbumsSection from './TopAlbumsSection/Section';
import NewAlbumsSection from './NewAlbumsSection/NewAlbumsSection';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <section>
    <TopAlbumsSection />
    <NewAlbumsSection />
    </section>
    {/* <Routes>
      
    </Routes> */}
    </>
  );
}

export default App;
