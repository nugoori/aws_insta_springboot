import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authenticate } from '../apis/api/account';

function AuthRoute({ element }) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"]; // 로그인 없이도 접근이 가능한 경로

    // 검증된 accessToken인지 확인
    useEffect(() => {
        //async  const response = await authenticate();
        // pathname = / , token이 유효하면 .then실행해서 홈으로, 홈에오면 다시 useEffect가 실행되면서 catch 실행
        authenticate() 
            .then(response => {
                const isAuthenticated = response.data;
                let isAccountsPath = false;
                
                for(let path of permitAllPath) {
                    if(pathname.startsWith(path)) {
                        if(isAuthenticated) {
                            navigate("/");
                        }
                    }
                }
        })
        .catch(error => {
            alert(error.response.data);
            setAuthenticated(false); // 비동기처리이기 때문에 아래의 if문으로 한번 더 인증을 검증해줌
            if(!authenticated) {
                navigate("/accounts/login")
            }
        })
        
    }, [authenticated]);
    // [] 아무것도 안넣으면 페이지가 렌더링 될 때 한번만

    // console.log("호출") 로그인 버튼을 누르면 console이두번 호출됨 -> authRoute는 실행되는데 useEffect문이 실행이 안됨 = authenticated가 안바뀐거임 -
    return element;
}

export default AuthRoute;