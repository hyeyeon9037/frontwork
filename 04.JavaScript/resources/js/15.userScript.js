function validate() {
    const idInput = document.getElementById('userId');
    const pwdInput = document.getElementById('userPw');
    const chPwdInput = document.getElementById('checkPw');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
 
    // id
    // 첫글자는 반드시 영문자로 시작하고, 영문자, 숫자포함 총 4~12글자로 입력하시오.

    let reg =/^[a-z][a-z\d]{3,11}$/;
    // let reg =/^[a-z][a-z0-9]{3,11}$/; 랑 똑같은 말! \d랑 [0-9] 같은겨~

    if(!reg.test(idInput.value)){ // ! 를 치면 거짓일 때에만 들어간다는 소리
        alert("유효한 아이디가 아닙니다.");
        idInput.value ="";
        idInput.focus();
        return false;
    }

    // 비밀번호
    // 영문자, 숫자, 특수문자(!@#$%^&*)로 총 8~15자로 입력하시오.
    let pwreg = /^[a-z\n!@#$%^&*]{8,15}$/i; // 대소문자 둘다쓰면 i 대문자안쓰면 i를 안쓰면 돼!
    if(!pwreg.test(pwdInput.value)){
        alert("유효한 비밀번호가 아닙니다.");
        pwdInput.value ="";
        pwdInput.focus();
        return false;
    }

    // 비밀번호 일치 여부
    if(pwdInput.test(chPwdInput.value)){
        alert("동일한 비밀번호가 아닙니다.");
        chPwdInput.value ="";
        chPwdInput.focus();
        return false;
    }


    // 이름
    let nmaeReg = /^[가-힣]{2,}$/;
    if(nmaeReg.test(nameInput.value)){
        alert("유효한 이름이 아닙니다.");
        nameInput.value="";
        nameInput.focus();
        return false;
    }

    // 이메일
    // let email = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    // //\. 은 . 이 들어온다는소리
    // emailReg = /^\w+@\w+\.\w+(\.\w+)?/;

    let emailReg = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}(\.[a-z]{2})?/;
    if(!emailReg.test(emailInput.value)){
        alert("유효한 이름이 아닙니다.");
        emailInput.value="";
        emailInput.focus();
        return false;
    }


}