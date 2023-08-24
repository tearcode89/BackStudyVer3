const apple = 3;
const banana = 2;

console.log(`철수는 사과를 ${apple}개 바나나를 ${banana}개 가지고 있습니다`)


function getWelcomeTemplate({name, age, school, createdAt}){
    // const { name, age, school, createdAt } = user


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

const myuser = {
    name: '최애',
    age: '99',
    school:"나뭇잎 초등학교",
    createdAt: "2023-08-01"
}
getWelcomeTemplate(myuser)