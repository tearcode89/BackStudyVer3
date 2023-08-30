import coolsms from 'coolsms-node-sdk'

export function checkValidationPhone(myphone){
    if(myphone.length !== 10 && myphone.length !== 11){
        console.log('에러 발생!! 핸드폰 번호를 제대로 입력해 주세요!!');
        return false;
    } else {
        return true;
    }
}

export function getToken(){
    const mycount = 6;
    if(mycount === undefined){
        console.log('에러 발생!! 갯수를 제대로 입력해 주세요')
        return
    } else if(mycount <= 0){
        console.log('에러 발생!! 갯수가 너무 적습니다')
        return;
    } else if(mycount > 10){
        console.log('에러 발생!! 갯수가 너무 많습니다.')
        return;
    }
    const result = String(Math.floor(Math.random() * 10 ** mycount)).padStart(6, '0')
    return result;
    // console.log(result)
}

export async function sendTokenToSMS(fff, ggg){ // fff 는 휴대폰 번호 ggg 는 인증번호
    const mysms = coolsms.default
    const messageService  = new mysms("NCSSVDGLLWJ4NZHL" , "4VJDRXDTFVOTIGVWMPEYMTMD6XHOI2XV") // 첫번째 인자엔 API-Key 두번째 인자엔 API-Secret

    const result = await messageService.sendOne({
        to: fff,
        from: "010-4728-0170",
        text: `[Jun] 안녕하세요 개발자 박상준 입니다. 요청하신 인증번호는 ${ggg}와 같습니다.`
    })

    console.log(result);
}