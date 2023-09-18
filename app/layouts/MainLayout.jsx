import Navbar from '@/components/Navbar';
import Hero from './includes/Hero';
import Jobs from './includes/Jobs';
import Contact from './includes/Contact';
import About from './includes/About';
import Skills from './includes/Skills';
import Experience from './includes/Experience';

const MainLayout = ({ children }) => {
    return (
        <div
            className="h-screen bg-gradient-to-b
         from-white via-purple-200 via-40%  to-pink-100`"
        >
            <header className="">
                <Navbar />
            </header>
            <div>
                <Hero />
                <About />
                <Jobs />
                <Skills />
                <Experience />
                <Contact />
            </div>
        </div>
    );
};

export default MainLayout;
