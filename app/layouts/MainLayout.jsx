import Navbar from '@/components/Navbar';
import Hero from './includes/Hero';
import Jobs from './includes/Jobs';
import Contact from './includes/Contact';
import About from './includes/About';

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
                <Contact />
            </div>
        </div>
    );
};

export default MainLayout;
