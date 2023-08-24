import {getToday} from "./utils.js";

export function checkValidationEmail(email) {
    if(email === undefined || !email.includes('@')){
        console.log('에러발생 !! 이메일을 제대로 입력해주세요!!')
        return false;
    } else {
        return true;
    }
}

export function getWelcomeTemplate({ name, age, school }) {

    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: ${getToday()}</div>
            </body>
        </html>   `
}

export function sendTemplateEmail(email, mytemplate) {
    return console.log(`${email} 로 ${mytemplate}을 전송합니다`)
}