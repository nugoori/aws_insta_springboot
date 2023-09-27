import React, { useEffect, useState } from 'react';
import SignInAndUpLayout from '../../components/Layouts/SignInAndUpLayout/SignInAndUpLayout';
import Top from '../../components/Layouts/SignInAndUpLayout/Top/Top';
import Bottom from '../../components/Layouts/SignInAndUpLayout/Bottom/Bottom';
import Input from '../../components/Layouts/SignInAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SignInAndUpLayout/OrBar/OrBar';
import { signup } from '../../apis/api/account';
import { useNavigate } from 'react-router-dom';

function SignUp(props) {

    const navigate = useNavigate();

    // input value 를 받을 객체 -> value가 넘어와서 account의 상태가 변하고 그 중에 ""이 있다면 버튼은 비활성화
    const emptyAccount = {
        phoneOrEmail: "",
        name: "",
        username: "",
        password: ""
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

    const handleSignUpSubmit = async () => {
        try {
            const response = await signup(account);
            navigate("/accounts/login");

        } catch(error) {
            const responseErrorMessage = error.response.data;
            const keys = Object.keys(responseErrorMessage);

            if(keys.includes("username")) {
                setErrorMessage(responseErrorMessage.username);
            }else if(keys.includes("phoneOrEmail")) {
                setErrorMessage(responseErrorMessage.phoneOrEmail);
            }else if(keys.includes("name")) {
                setErrorMessage(responseErrorMessage.name);
            }else if(keys.includes("password")) {
                setErrorMessage(responseErrorMessage.password);
            }
        }
    }

    return (
        <SignInAndUpLayout >
            <Top >
                <div>
                    <div>
                        친구들의 사진과 동영상을 보려면 가입하세요.
                    </div>

                    <button>
                        Kakao로 로그인
                    </button>

                    <OrBar />

                    <Input placeholder={"휴대폰 번호 또는 이메일 주소"} name={"phoneOrEmail"} changeAccount={changeAccount}/>
                    <Input placeholder={"성명"} name={"name"} changeAccount={changeAccount}/>
                    <Input placeholder={"사용자 이름"} name={"username"} changeAccount={changeAccount}/>
                    <Input type={"password"} placeholder={"비밀번호"} name={"password"} changeAccount={changeAccount}/>

                    <button disabled={isAccountValuesEmpty} onClick={handleSignUpSubmit}>
                        가입
                    </button>

                    <div>
                        {errorMessage}
                    </div>

                </div>
            </Top>

            <Bottom >

            </Bottom>
        </SignInAndUpLayout>

    );
}

export default SignUp;


