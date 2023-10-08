import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();


function ServiceCard({ service }) {
    const { id, name, image, description, price, button } = service;
    return (
        <div>
            <div className="card w-64 lg:w-96 glass">
                <figure><img src={image} alt="car!" className='w-96 h-48' /></figure>
                <div className="">
                    <h2 className="text-white text-2xl">{name}</h2>
                    <p className='text-'>{description}</p>
                    <p>Price: ${price}</p>
                    <div className="">
                        <Link to={`/service/${id}`}>
                            <button className="btn btn-primary">{button}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard