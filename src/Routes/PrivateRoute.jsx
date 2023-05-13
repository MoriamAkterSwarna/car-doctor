import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import {Navigate} from "react-router"

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)

    if(loading){
        <progress className="progress w-56"></progress>
    }

    else if(user?.email){
        return children;
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;