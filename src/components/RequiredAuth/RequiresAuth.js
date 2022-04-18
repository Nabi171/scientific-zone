import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, Navigate } from 'react-router';
import Loading from '../Loading/Loading';

const RequiresAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        <Loading />
    }
    else if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequiresAuth;



