import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    {/* <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/> */}


    if (user) {
        return children;
    }



    return <Navigate to="/login"></Navigate>


}

export default PrivateRoute