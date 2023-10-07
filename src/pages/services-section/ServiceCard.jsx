import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function ServiceCard({ service }) {
    const { id, name, image, description, price, button } = service;
    console.log(name)
    return (
        <div>
            <div className="card w-64 lg:w-96 glass ">
                <figure><img src={image} alt="car!" className='w-96 h-48' /></figure>
                <div className="">
                    <h2 className="">{name}</h2>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <div className="">
                        <button className="btn btn-primary">{button}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard