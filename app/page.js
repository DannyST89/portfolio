'use client';

import MainLayout from './layouts/MainLayout';
import { ThemeProvider } from 'next-themes';

export default function Home() {
    return (
        <ThemeProvider attribute="class">
            <MainLayout></MainLayout>
        </ThemeProvider>
    );
}
