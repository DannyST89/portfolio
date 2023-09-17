import Navbar from '@/components/Navbar';
import Hero from './includes/Hero';
import Jobs from './includes/Jobs';
import Contact from './includes/Contact';

const MainLayout = ({ children }) => {
    return (
        <div
            className="p-4  h-screen w-full bg-gradient-to-b
         from-white via-purple-200 via-40%  to-pink-100`"
        >
            <header>
                <Navbar />
            </header>
            <div>
                <Hero />
                <Jobs />
                <Contact />
            </div>
        </div>
    );
};

export default MainLayout;
