import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Footer from "../components/Footer";

import React from 'react'

function Home() {
    return (
        <div>
            <div id="exceptFooter">
                <Popular />
                <Veggie />
            </div>
            <Footer />
        </div>
    )
}

export default Home
