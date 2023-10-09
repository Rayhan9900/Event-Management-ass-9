
import React, { useEffect, useRef, useState, } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { TypeAnimation } from 'react-type-animation';



function Instructor() {
    const [instructors, setInstructors] = useState([]);



    useEffect(() => {
        fetch('/instructor.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])


    return (
        <div className='mt-20 '>

            <div className='mb-8'>
                <TypeAnimation className='text-accent text-3xl'
                    sequence={[
                        '',
                        500,
                        'I',
                        500,
                        'IN',
                        500,
                        'INS',
                        500,
                        'INST',
                        500,
                        'INSTR',
                        500,
                        'INSTRU',
                        500,
                        'INSTRUC',
                        500,
                        'INSTRUCT',
                        500,
                        'INSTRUCTO',
                        500,
                        'INSTRUCTOR',
                        500,
                    ]}
                    speed={100}

                    style={{ fontSize: '2em', }}
                    repeat={Infinity}
                />
            </div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    instructors.map(({ id, img, name, position }) =>
                        <SwiperSlide key={id}>
                            <div className='flex flex-col gap-5 justify-center items-center'>
                                <img className='w-64 h-48' src={img} alt="" />
                                <p>{name}</p>
                                <p>{position}</p>
                            </div>
                        </SwiperSlide>
                    )
                }

            </Swiper>



        </div>
    )
}

export default Instructor