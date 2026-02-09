"use client"

import { Provider } from "react-redux";
import { store } from "./store";

// components
import Navbar from "./components/Navbar";


export default function LayoutClient({ children }) {
    return (
        <>
            <Provider store={store}>
                <Navbar />
                {children} 
            </Provider>
        </>
    )
}