import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location =  useLocation()
    console.log( 'user in private route',user);
    if(loading){
        // return     <Spinner animation="border" variant="info" />
    }

    if(user){
        return children;

    }


    return (
        <div>
             <Navigate state={{from:location}} to="/login" replace> </Navigate>
        </div>
    );
};

export default PrivateRoutes;