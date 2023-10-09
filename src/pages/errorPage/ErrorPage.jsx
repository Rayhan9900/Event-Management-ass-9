
import { Link } from 'react-router-dom'
import error from '../../assets/404_page_cover.jpg'

function ErrorPage() {
    return (
        <div >
            <img className='w-full h-full  fixed' src={error} alt="" />

            <Link className='  mt-10 fixed' to="/" ><button className='text-accent'>Go To Home Page</button></Link>
        </div>
    )
}

export default ErrorPage