"use client"

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/app/features/themes/themeSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer
    }
});