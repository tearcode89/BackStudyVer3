const apple = 3;
const banana = 2;

console.log(`철수는 사과를 ${apple}개 바나나를 ${banana}개 가지고 있습니다`)


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

// const myuser = {
    // name: '영희',
    // age: 11,
    // school: '열혈초등학교',
    // createdAt: '2023-02-01'
// }

// getWelcomeTemplate(myuser)

const name = 'Jun'
const age = 100
const school = '열혈초등학교'
const createdAt = '2023-01-01'

// const myuser = { name, age, school, createdAt }  
getWelcomeTemplate({ name, age, school, createdAt })