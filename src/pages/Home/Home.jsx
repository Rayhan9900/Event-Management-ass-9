import React from 'react'
import Banner from '../section-1/Banner'
import Services from '../services-section/Services'
import Testimonial from '../testimonial/Testimonial'
import Instructor from '../instructor/Instructor'
import Footer from '../footer/Footer'
import { useLoaderData } from 'react-router-dom'


function Home() {

    const instructors = useLoaderData();
    console.log(instructors)


    return (
        <div className=''>
            <Banner></Banner>
            <Services />
            <Instructor instructors={instructors}></Instructor>
            <Testimonial></Testimonial>
            <Footer></Footer>


        </div>
    )
}

export default Home