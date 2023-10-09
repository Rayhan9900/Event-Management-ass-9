import React from 'react'

function ServiceDCard({ details }) {


    const { name, image, description_2 } = details

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm  rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-accent">{name}</h1>
                        <p className="py-6">{description_2}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDCard