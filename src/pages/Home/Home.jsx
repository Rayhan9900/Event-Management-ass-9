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

    const trestimonial = useLoaderData()


    return (
        <div className=''>
            <Banner></Banner>
            <Services />
            <Instructor instructors={instructors}></Instructor>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    trestimonial.map(item => <Testimonial
                        key={item.id}
                        trestimonial={item}>
                    </Testimonial>)
                }
            </div>
            <Footer></Footer>


        </div>
    )
}

export default Home