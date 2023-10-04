import React, { useEffect, useState } from 'react';
import SignInAndUpLayout from '../../components/Layouts/SignInAndUpLayout/SignInAndUpLayout';
import Top from '../../components/Layouts/SignInAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SignInAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SignInAndUpLayout/OrBar/OrBar';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../apis/api/account';
import { useQueryClient } from 'react-query';

function SignIn(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient(); // AuthRoute의 useQuery

    // input value 를 받을 객체 -> value가 넘어와서 account의 상태가 변하고 그 중에 ""이 있다면 버튼은 비활성화
    const emptyAccount = {
        phoneOrEmailOrUsername: "",
        loginPassword: ""
    }

    const [ account, setAccount ] = useState(emptyAccount);
    const [ isAccountValuesEmpty, setIsAccountValuesEmpty ] = useState(true);
    const [ errorMessage, setErrorMessage ] = useState("");
    
    const changeAccount = (name, value) => {
        setAccount({
            ...account,
            [name]: value
        })
    }

    useEffect(() => {
        // Object.values(account) list로 값을 반환
        setIsAccountValuesEmpty(Object.values(account).includes(""))
        // console.log(account)
    }, [account])

    const handleSignInSubmit = async () => {
        try {
            const response = await signIn(account);
            localStorage.setItem("accessToken", "Bearer " + response.data); // Bearer : JWT 토큰에 규칙처럼 붙여줌
            window.location.reload();
        } catch (error) {
            setErrorMessage(error.response.data.errorMessage);
        }
    }

    return (
        <SignInAndUpLayout>
            <Top>
                <div>
                    <Input placeholder={"휴대폰, 이메일 또는 사용자 이름"} name={"phoneOrEmailOrUsername"} changeAccount={changeAccount}/>
                    <Input placeholder={"비밀번호"} type={"password"} name={"loginPassword"} changeAccount={changeAccount}/>
                    <button disabled={isAccountValuesEmpty} onClick={handleSignInSubmit}>
                        로그인
                    </button>
                    <OrBar />
                </div>
                    <div>
                        Kakao로 로그인
                    </div>
                    <div>
                        {errorMessage}
                    </div>
            </Top>
        </SignInAndUpLayout>
    );
}

export default SignIn;