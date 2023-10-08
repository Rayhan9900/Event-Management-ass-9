import React, { useState } from 'react'

function Testimonial({ trestimonial }) {

    const { name, image_url, description } = trestimonial;



    return (
        <div className='mt-20'>
            <div className="h-96 rounded-xl glass shadow-xl">
                <img src={image_url} alt="Album" className='rounded-full w-36 h-36 ml-28 ' />
                <div className="mt-12">
                    <h2 className="text-center">{name}</h2>
                    <h2 className="text-center">{description}</h2>
                </div>
            </div>


            {/* <div className="carousel carousel-end rounded-box">
                <div className="carousel-item">
                    <img src={image_url} alt="Drink" />
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div> */}

        </div>



    )
}

export default Testimonial
