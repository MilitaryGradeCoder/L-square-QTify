
import Hero from './Hero/Hero';
import TopAlbumsSection from './TopAlbumsSection/Section';
import NewAlbumsSection from './NewAlbumsSection/NewAlbumsSection';
import SongsSection from './SongsSection/SongsSection';
import FAQSection from './FAQsection/FAQsection';


export default function Landing (){
    return(
         <>
    <Hero />
    <section>
    <TopAlbumsSection />
    <NewAlbumsSection />
    </section>
    <SongsSection />
    <FAQSection/>
    
    </>
    )
}