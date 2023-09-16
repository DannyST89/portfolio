import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Portfolio',
    description: `Danny's portfolio`,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="dark:bg-[#020617]">{children}</body>
        </html>
    );
}
