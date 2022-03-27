import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Footer from "../components/Footer";
import {motion} from 'framer-motion';

import React from 'react'

function Home() {
    return (
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div id="exceptFooter">
                <Popular />
                <Veggie />
            </div>
            <Footer />
        </motion.div>
    )
}

export default Home
