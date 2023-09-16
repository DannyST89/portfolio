import Navbar from '@/components/Navbar';
import { useSelector } from 'react-redux';

const MainLayout = ({ children }) => {
    const isDarkMode = useSelector((state) => state.darkMode);

    return (
        <div
            className={`p-4 ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
            } h-screen`}
        >
            <header>
                <Navbar />
            </header>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                sint praesentium unde quia quo eligendi beatae provident odit
                dolorem possimus, excepturi, explicabo doloribus totam debitis,
                voluptatum in omnis dolor corrupti deserunt nemo! Ut
                praesentium, suscipit dolore placeat laboriosam eum eius
                impedit! Molestias excepturi et reiciendis doloribus nemo
                tenetur ratione a, saepe amet velit non. Id at nam tempore,
                perferendis quis odit. Molestiae amet nisi maiores, repellendus
                a modi rerum aliquid exercitationem, officiis earum ratione
                expedita labore ad! Reprehenderit quasi dolorem, officiis
                repellendus molestiae molestias possimus distinctio facere
                explicabo consequatur cupiditate rerum ab vitae asperiores.
                Praesentium possimus est dignissimos nulla tempora!
            </div>
        </div>
    );
};

export default MainLayout;
