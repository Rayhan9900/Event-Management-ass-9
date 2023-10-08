
import React, { useRef, } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';



function Instructor({ instructors }) {


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