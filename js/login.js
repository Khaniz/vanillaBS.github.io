const signInID = document.querySelector("#signIn_ID");
const signInPW = document.querySelector("#signIn_PW");

const logInID = document.querySelector("#logIn_ID");
const logInPW = document.querySelector("#logIn_PW");

const signInSubmit = document.querySelector("#SignIn_btn");

const sign_in_confirm = document.querySelector("#sign_in_confirm");

const signInForm = document.querySelector("#sign_in_form");
const signInInfo = document.querySelector("#sign_in_info");

const logInForm = document.querySelector("#log_in_form");


signInSubmit.addEventListener("click", signIn)

sign_in_confirm.addEventListener("click", saveUserInfo);
signInForm.addEventListener("click", signIn);

document.querySelector("#signIn_ID").addEventListener("keyup", signIn)

function signIn(){
    
    const ID = signInID.value;
    const PASSWORD = signInPW.value;

    signInForm.classList.remove("hidden")
    logInForm.classList.add("hidden")

    if(localStorage.getItem(ID)==null) {
        sign_in_confirm.innerHTML = `입력하신 ID = ${ID} 입니다.`
        sign_in_confirm.innerHTML += `이 ID로 가입하시려면 PW를 입력해주세요`
        document.querySelector("#signIn_PW").classList.remove("hidden");
        const confirmBtn = document.createElement("input")
        confirmBtn.type = "button";
        confirmBtn.id = "confirm_btn_for_signin"
        confirmBtn.value = "가입하기!"
        sign_in_confirm.appendChild(confirmBtn);
    }else {
        sign_in_confirm.innerHTML = `입력하신 ID = ${ID} 는 이미 존재하는 아이디 입니다...`;
        sign_in_confirm.innerHTML += `다른 아이디를 입력해주세요`;
    }


    // if(localStorage.getItem(ID)==null) {
    //     confirmInfo.innerHTML = `입력하신 ID = ${ID} 입니다. 이대로 가입하시겠습니까?`;
    //         const confirm = document.createElement("input")
    //         confirmInfo.appendChild(confirm);
    //         confirm.value ="Sign in";
    //         confirm.type="button";
    //         confirm.id="confirm";
    // }else {
    //     confirmInfo.innerHTML = `입력하신 ID = ${ID} 는 이미 존재하는 아이디 입니다...`;
    //     confirmInfo.innerHTML += `다른 아이디를 입력해주세요`;
    // }

    // if(localStorage.getItem(ID)==null){
    //     confirmInfo.innerHTML = `입력하신 ID = ${ID} 입니다. 이대로 가입하시겠습니까?`;
    //     const confirm = document.createElement("input")
    //     confirmInfo.appendChild(confirm);
    //     confirm.value ="Sign in";
    //     confirm.type="button";
    //     confirm.id="confirm";
    //
    // }else{
    //     confirmInfo.innerHTML = `입력하신 ID = ${ID} 는 이미 존재하는 아이디 입니다...`;
    //     confirmInfo.innerHTML += `다른 아이디를 입력해주세요`;
    // }
    // localStorage.setItem(ID,PASSWORD);
}

function logIn(){
    const ID = logInID.value;
    const PASSWORD = logInPW.value;


}

function saveUserInfo(){
    const ID = signInID.value;
    const PASSWORD = signInPW.value;

    localStorage.setItem(ID,PASSWORD)

    location.reload();
}


