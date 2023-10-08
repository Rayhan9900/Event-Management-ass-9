
import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import ServiceDCard from './ServiceDCard'

function ServiceDetailes() {
    const serviceD = useLoaderData()
    console.log(serviceD)

    const [details, setDetailes] = useState([])



    const { id } = useParams()


    useEffect(() => {
        const serviceDetails = serviceD.find(item => item.id === id);
        setDetailes(serviceDetails)
    }, [serviceD, id])



    return (
        <div>
            <ServiceDCard details={details}></ServiceDCard>
            {/* {
                details.map(detail =>
                    <ServiceDCard
                        key={detail.id}
                        detail={detail}
                    />)
            } */}

        </div>
    )
}

export default ServiceDetailes