function getWelcomeTemplate(name, age, school, mycreatedAt){
    const result = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: ${mycreatedAt}</div>
            </body>
        </html>
    `
    console.log(result);
}

const myname = 'Jun';
const myage = 100
const myschool = '열혈초등학교';
const mycreatedAt = '2023-01-02';
getWelcomeTemplate(myname, myage, myschool, mycreatedAt)