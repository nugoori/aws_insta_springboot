
export const PHONE_OR_EMAIL = /[a-zA-Z0-9]+@[\da-zA-Z]+\.[a-z]*$|^[\d]{11}$/;

export const NAME = /^[가-힣]{2,6}$/;

export const USERNAME = /^[a-z0-9_.]*$/; // and(?=.) [소문자알파벳,숫자,_.만 허용]

export const PASSWORD = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/; // \\W 특수문자 전체











