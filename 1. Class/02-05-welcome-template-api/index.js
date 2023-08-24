import { checkValidationEmail, getWelcomeTemplate, sendTemplateEmail } from './email.js';

function createUser(user) {
    // 1. 이메일이 정상인지 확인(1- 존재여부 2-"@"포함여부)
    const isValid = checkValidationEmail(user.email)
    if(isValid){
        // 2. 가입환영 템플릿 만들기
        const mytemplate = getWelcomeTemplate(user)

        // 3. 이메일에 가입환영 템플릿 전송하기
        sendTemplateEmail(user.email, mytemplate);
    }
}

const myuser = {
    name: '철수',
    age: 8,
    school: "다람쥐 초등학교",
    email: 'a@a.com',
    createdAt: '2023-01-03'
}

createUser(myuser);