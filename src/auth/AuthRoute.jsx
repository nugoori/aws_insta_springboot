import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function AuthRoute({ element }) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"]; // 로그인 없이도 접근이 가능한 경로
    const [ authenticated, setAuthenticated ] = useState(false);

    for(let path of permitAllPath) {
        if(pathname.startsWith(path)) {
            if(authenticated) {
                return <Navigate to={"/"} />
            }
            return element;
        }
    }

    if(!authenticated) {
        return <Navigate to={"/accounts/login"} />;
    }

    return element
}

export default AuthRoute;