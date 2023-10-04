import { Navigate, useLocation } from 'react-router-dom';
import { authenticate } from '../apis/api/account';
import { useQuery } from 'react-query';
import Loding from '../components/Loading/Loding';

function AuthRoute({ element }) {
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"]; // 로그인 없이도 접근이 가능한 경로

    // 검증된 accessToken인지 확인
    // useEffect(() => {
        //async  const response = await authenticate();
        // pathname = / , token이 유효하면 .then실행해서 홈으로, 홈에오면 다시 useEffect가 실행되면서 catch 실행
    //     authenticate() 
    //         .then(response => {
    //             const isAuthenticated = response.data;
    //             let isAccountsPath = false;
                
    //             for(let path of permitAllPath) {
    //                 if(pathname.startsWith(path)) {
    //                     if(isAuthenticated) {
    //                         navigate("/");
    //                     }
    //                 }
    //             }
    //     })
    //     .catch(error => {
    //         alert(error.response.data);
    //         setAuthenticated(false); // 비동기처리이기 때문에 아래의 if문으로 한번 더 인증을 검증해줌
    //         if(!authenticated) {
    //             navigate("/accounts/login")
    //         }
    //     })
        
    // }, [authenticated]);
    // [] 아무것도 안넣으면 페이지가 렌더링 될 때 한번만

    // console.log("호출") 로그인 버튼을 누르면 console이두번 호출됨 -> authRoute는 실행되는데 useEffect문이 실행이 안됨 = authenticated가 안바뀐거임 -

    /*===============================================================================================*/

    // useQuery는 무조건 get요청
    // 배열안에 키값( 정책으로 정해진 것 ), 비동기 처리 요청, 옵션( 에러 처리도 useQuery의 속성에서 할 수 있음 )
    const authenticateState = useQuery(["authenticate"], authenticate, {
        retry: 1, // 재요청 횟수 지정
        refetchOnWindowFocus: false

        // onError: (error) => {
        //     console.log("error");
        //     console.log(error);
        // }
    });

    // console.log(authenticateState)

    if(authenticateState.isLoading) {
        return <Loding />;
    }

    if(authenticateState.isError) {
        console.log(authenticateState.error.response.data); //error남
        for(let path of permitAllPath) {
            if(pathname.startsWith(path)) {
                return element;
            }
        }
        return <Navigate to={"/accounts/login"}/>
    }

    //
    for(let path of permitAllPath) {
        if(pathname.startsWith(path)) {
            return <Navigate to={"/"}/>
        }
    }
    
    return element;
}

export default AuthRoute;