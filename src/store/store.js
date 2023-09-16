import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from '@/src/store/slices/darkModeSlice';

const store = configureStore({
    reducer: {
        darkMode: darkModeReducer, // Add other reducers here if needed
    },
});

export default store;
