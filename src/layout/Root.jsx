
import { Outlet } from 'react-router-dom'
import Navber from '../pages/Navber/Navber'

function Root() {
    return (
        <div className=''>
            <Navber />
            <Outlet></Outlet>
        </div>
    )
}

export default Root