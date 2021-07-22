import React, { useState } from 'react'
import CreateJobListing from '../Components/JobListingSection/CreateJobListing'
import HeroSection from '../Components/HeroSection'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import ListOfJobs from '../Components/JobListingSection/ListOfJobs'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)


    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <ListOfJobs/>
        </>
    )
}

export default Home
