
import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Services from '../services-section/Services'
import ServiceCard from '../services-section/ServiceCard'

function ServiceDetailes() {
    const [details, setDetailes] = useState({})

    const { id, } = useParams()

    const servicedetails = useLoaderData()

    useEffect(() => {
        const findDetails = Services?.find(details => details.id === id)
        setDetailes(findDetails)

    }, [id, servicedetails])

    return (
        <div>
            <ServiceCard details={details}></ServiceCard>
        </div>
    )
}

export default ServiceDetailes