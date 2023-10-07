import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import Marquee from 'react-fast-marquee';
AOS.init();

function Services() {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services)

    return (
        <div className=' mt-20'>

            <div className='mb-8'>

                <TypeAnimation className='text-accent'
                    sequence={[
                        '',
                        500,
                        'S',
                        500,
                        'SE',
                        500,
                        'SER',
                        500,
                        'SERV',
                        500,
                        'SERVI',
                        500,
                        'SERVIC',
                        500,
                        'SERVICE',
                        500,
                        'SERVICES',
                        500,
                    ]}
                    speed={100}

                    style={{ fontSize: '2em', }}
                    repeat={Infinity}
                />
                <Marquee pauseOnHover={true} speed={100}>
                    <p className='text-pink-600 text-lg text-center'>***There are top services from my event***</p>
                </Marquee>
            </div>

            <div data-aos="fade-up" data-aos-duration='3000' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map(service =>
                        <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Services