import React from "react";
import Header from "../components/admin/header/Header.jsx"
import Footer from "../components/admin/footer/Footer.jsx"
import Leads from "../components/admin/main/leads/Leads.jsx"


export default function LeadsRoute() {
    return (
        <section>
            <Header active={"leads"}/>
            <Leads />
            <Footer />
        </section>
    )
}