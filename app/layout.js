import './globals.css';
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Portfolio',
    description: `Danny's portfolio`,
};
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['500', '700'],
});
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.className}`}>{children}</body>
        </html>
    );
}
