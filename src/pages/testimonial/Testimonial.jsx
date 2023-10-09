import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';

function Testimonial({ trestimonial }) {

    const { name, image_url, description } = trestimonial;



    return (
        <div className='mt-20'>

            <div className='mb-8'>

                <TypeAnimation className='text-accent text-3xl'
                    sequence={[
                        '',
                        500,
                        'C',
                        500,
                        'CL',
                        500,
                        'CLI',
                        500,
                        'CLIE',
                        500,
                        'CLIEN',
                        500,
                        'CLIENT',
                        500,

                    ]}
                    speed={100}

                    style={{ fontSize: '2em', }}
                    repeat={Infinity}
                />
            </div>

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
