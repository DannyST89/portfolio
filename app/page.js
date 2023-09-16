'use client';
import { Provider } from 'react-redux';
import MainLayout from './layouts/MainLayout';
import store from '@/src/store/store';

export default function Home() {
    return (
        <Provider store={store}>
            <MainLayout></MainLayout>
        </Provider>
    );
}
