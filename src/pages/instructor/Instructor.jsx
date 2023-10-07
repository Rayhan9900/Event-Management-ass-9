
import React, { useRef, } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';



function Instructor({ instructors }) {

    // const progressCircle = useRef(null);
    // const progressContent = useRef(null);

    return (
        <div className='mt-20 '>
            <h2 className="text-3xl">Instuctor</h2>

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
                    instructors.map(instructor =>
                        <SwiperSlide key={instructor.id}>
                            <img className='w-64 h-48' src={instructor.img} alt="" />
                            <p>{instructor.name}</p>
                            <p>{instructor.position}</p>
                        </SwiperSlide>
                    )
                }

            </Swiper>





            {/* <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
               
            </Swiper> */}

        </div>
    )
}

export default Instructor