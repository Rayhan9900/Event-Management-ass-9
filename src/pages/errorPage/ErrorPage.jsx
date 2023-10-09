
import { Link } from 'react-router-dom'
import error from '../../assets/Error.jpg'

function ErrorPage() {
    return (
        <div>
            <img className='w-full absolute' src={error} alt="" />

            <Link className='relative bottom-1/2 left-1/3' to="/" ><button>Go To Home Page</button></Link>
        </div>
    )
}

export default ErrorPage