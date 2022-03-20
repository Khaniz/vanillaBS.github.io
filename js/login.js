const signInID = document.querySelector("#SignIn_ID");
const signInPW = document.querySelector("#SignIn_PW");
const signInSubmit = document.querySelector("#SignIn_submit");

const confirmInfo = document.querySelector("#confirmInfo");



signInSubmit.addEventListener("click", signIn)

confirmInfo.addEventListener("click", saveUserInfo);

function signIn(){
    
    const ID = signInID.value;
    const PASSWORD = signInPW.value;
    
    
    if(localStorage.getItem(ID)==null){
        confirmInfo.innerHTML = `입력하신 ID = ${ID} 입니다. 이대로 가입하시겠습니까?`;
        const confirm = document.createElement("input")
        confirmInfo.appendChild(confirm);
        confirm.value ="Sign in";
        confirm.type="button";
        confirm.id="confirm";
        
    }else{
        confirmInfo.innerHTML = `입력하신 ID = ${ID} 는 이미 존재하는 아이디 입니다...`;
        confirmInfo.innerHTML += `다른 아이디를 입력해주세요`;
    }
    // localStorage.setItem(ID,PASSWORD);
}

function saveUserInfo(){
    const ID = signInID.value;
    const PASSWORD = signInPW.value;

    localStorage.setItem(ID,PASSWORD)

    location.reload();
}

