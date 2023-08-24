function getWelcomeTemplate({name, age, school, createdAt}){
    const result = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `
    console.log(result);
}

const name = 'Jun'
const age = 100
const school = '열혈초등학교'
const createdAt = '2023-01-01'


getWelcomeTemplate({name ,age , school, createdAt})