import React from "react";
import Header from "../components/admin/header/Header.jsx"
import Footer from "../components/admin/footer/Footer.jsx"
import Campanha from "../components/admin/main/campanha/Campanha.jsx";

export default function CampanhaRoute() {
    
    return (
        <section>
            <Header active={"campanha"}/>
            <Campanha />
            <Footer />
        </section>
    )
}