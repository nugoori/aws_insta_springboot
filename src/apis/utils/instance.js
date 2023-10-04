import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        // localStorage의 값이 중간에 바뀌면 Authorization의 값은 바뀌지 않음 -> 로그인 후에 window.location.reload()로 리렌더링 1004
        Authorization: !!localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : ""
    }
});

export default instance;