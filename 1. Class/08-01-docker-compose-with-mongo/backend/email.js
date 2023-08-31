import {getToday} from "./utils.js";
import nodemailer from 'nodemailer';
import 'dotenv/config.js'
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
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 500px">
                        <h1 style="color: red">${name}님 가입을 환영합니다.!!</h1>
                        <hr style="color: #6667ab"/>
                        <div>이름: ${name}</div>
                        <div>나이: ${age}살</div>
                        <div>학교: ${school}</div>
                        <div>가입일: ${getToday()}</div>
                    </div>
                </div>
            </body>
        </html>   `
}

export async function sendTemplateEmail(email, mytemplate) {

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const result = await transporter.sendMail({
        from: process.env.EMAIL_SENDER,
        to: email,
        subject: '[Jun] 가입을 축하합니다.',
        html: mytemplate
    })

    console.log(result)
    // return console.log(`${email} 로 ${mytemplate}을 전송합니다`)
}