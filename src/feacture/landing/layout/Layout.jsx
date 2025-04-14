import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SubFooter } from "./SubFooter";

export const Layout = ({children}) => {
    return(
        <main>
            <Header />
            {children}
            <SubFooter />
            <Footer />
        </main>
    )
}