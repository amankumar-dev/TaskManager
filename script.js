const openEye = document.querySelector('.open-eye');
const closeEye = document.querySelector('.close-eye');
const openEyer = document.querySelector('.open-eye-register');
const closeEyer = document.querySelector('.close-eye-register');
const password = document.querySelector('.password-input');
const passwordr = document.querySelector('.password-r');
const signUp = document.querySelector('.register-link');
const logIn = document.querySelector('.login-link');
const registerSection = document.querySelector('.register');
const loginSection = document.querySelector('.login');
const usernameName=document.querySelector('.username-name');
const emailRegInput=document.querySelector('.email-reg-input');
const alertBox=document.querySelector('.alert-holder');
const alertBoxClose=document.querySelector('.close-alert');


// For switch between login and signup
signUp.addEventListener('click', () => {
    registerSection.style.display = 'flex';
    loginSection.style.display = 'none';
})
logIn.addEventListener('click', () => {
    registerSection.style.display = 'none';
    loginSection.style.display = 'flex';
})

// For password section login
closeEye.style.display = 'none'
openEye.addEventListener('click', () => {
    password.setAttribute('type', 'text');
    closeEye.style.display = 'inline-block';
    openEye.style.display = 'none';
})
closeEye.addEventListener('click', () => {
    password.setAttribute('type', 'password');
    openEye.style.display = 'inline-block';
    closeEye.style.display = 'none';
})

// For password section register
closeEyer.style.display = 'none'
openEyer.addEventListener('click', () => {
    passwordr.setAttribute('type', 'text');
    closeEyer.style.display = 'inline-block';
    openEyer.style.display = 'none';
})
closeEyer.addEventListener('click', () => {
    passwordr.setAttribute('type', 'password');
    openEyer.style.display = 'inline-block';
    closeEyer.style.display = 'none';
})

// Storing value of login form
const userEmailLogin = document.querySelector('.username');
let passwordLogin = password;
const loginBtn = document.querySelector('.log-in');
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let emailLogVal = userEmailLogin.value;
    const passlogval = passwordLogin.value;
    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$&_?]/;
    const attherateRegex = /[@.]/;

    const isValidLength = passlogval.length >= 8;
    const hasLowerCase = lowerCaseRegex.test(passlogval);
    const hasUpperCase = upperCaseRegex.test(passlogval);
    const hasDigit = digitRegex.test(passlogval);
    const hasSpecialChar = specialCharRegex.test(passlogval);
    const validEmail = attherateRegex.test(emailLogVal);

    if (isValidLength && hasDigit && hasLowerCase && hasSpecialChar && hasUpperCase && validEmail) {
        window.location.href = "./main.html";
    }
    else {
        alertBox.style.transform='translateX(0%)';
    }
})
alertBoxClose.addEventListener('click',()=>{
    alertBox.style.transform='translateX(-500%)';
})

// Storing value for register
const userEmailReg = document.querySelector('.usernamer');
const RegBtn = document.querySelector('.register-btn');
const passwordReg = passwordr;
function RegisterFun(userNameRegVal,passRegVal,emailRegVal){
    const url='http://localhost:9099/auth/register';
    const option={
        method:'POST',
        body:JSON.stringify({
            name:userNameRegVal,
            password:passRegVal,
            email:emailRegVal
        }),
    }
    fetch(url,option)
        .then((response)=>{
            console.log(response.json());
        })
}
RegBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const emailValReg = userEmailReg.value;
    const passlogReg = passwordReg.value;
    const userNameReg=usernameName.value;
    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$&_?]/;
    const attherateRegex = /[@.]/;

    const isValidLength = passlogReg.length >= 8;
    const hasLowerCase = lowerCaseRegex.test(passlogReg);
    const hasUpperCase = upperCaseRegex.test(passlogReg);
    const hasDigit = digitRegex.test(passlogReg);
    const hasSpecialChar = specialCharRegex.test(passlogReg);
    const validEmail = attherateRegex.test(emailValReg);

    if (isValidLength && hasDigit && hasLowerCase && hasSpecialChar && hasUpperCase && validEmail) {
        console.log(userNameReg,passlogReg,emailValReg)
        RegisterFun(userNameReg,passlogReg,emailValReg)
        window.location.href = "./main.html";
    }
    else {
        alertBox.style.transform='translateX(0%)';
    }
})

