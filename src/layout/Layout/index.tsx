import React from "react";

// Components...
import Header from "components/Header";
import Footer from "components/Footer";

export default function Layout({ children }: any) {
    return (
        <div className="page">
            <Header />
            {children}
            <Footer />
        </div>
    );
};