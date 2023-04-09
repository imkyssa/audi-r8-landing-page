import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import AOS from "aos"
import "aos/dist/aos.css"
import Footer from './components/Footer'
import Features from './components/Features'
import Landing from './components/Landing'
import GoTopButton from './components/GoTopButton'

const App = () => {

    const [button, setButton] = useState(false)

    useEffect(() => {
        AOS.init()
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            window.pageYOffset > 300 ? setButton(true) : setButton(false)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {button &&
                <GoTopButton goToTop={goToTop} />
            }
            <Nav />
            <Landing />
            <Features />
            <Footer />
        </>
    )
}

export default App