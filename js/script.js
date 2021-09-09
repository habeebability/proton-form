const form  = document.getElementById('form');
const lname = document.querySelector('#lname');
const mGender = document.querySelector('#male');
const fGender = document.querySelector('#female');
const gender = document.getElementById("form").elements["gender"]
const fname = document.querySelector('#fname');
const email = document.getElementById('email');
const phone = document.getElementById('phone')
const countrySelect = document.getElementById('country-select');
const city = document.getElementById('city');
const levelSelect = document.getElementById('level-select');
const skillSelect = document.getElementById('skill-select')
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const passwordShow1 = document.querySelector('#password-show1');
const passwordShow2 = document.querySelector('#password-show2');


//showError 

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// validate email

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function phonenumber(phone)
{
  const phoneno = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
  return phoneno.test(String(phone));
 
}

// validate password
function validatePassword(password) {
  // let newPassword = document.getElementById('changePasswordForm').newPassword.value;
  let minNumberofChars = 6;
  let maxNumberofChars = 16;
  let pwdRegex  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return pwdRegex.test(password)
 
}






function showPassword1() {
  
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function showPassword2() {
  
  if (password2.type == "password") {
    password2.type = "text";
  } else {
    password2.type = "password";
  }
}

passwordShow1.addEventListener('click', showPassword1);
passwordShow2.addEventListener('click', showPassword2);



form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (fname.value === '') {
    showError(fname, 'Enter First Name ')
  } else {
    showSuccess(fname);
  }

  if (lname.value === '') {
    showError(lname, 'Enter Last Name ')
  } else {
    showSuccess(lname);
  }

 if (mGender.checked == false && fGender.checked == false) {
  showError(mGender, 'Select a Gender' )

 }
  else if(mGender.checked == true || fGender.checked == true) {
    showSuccess(mGender);

  }

  if(phone.value === '') {
    showError(phone, 'Phone number is required')
  }

  else if(!phonenumber(phone.value)){
    showError(phone, 'Enter Valid phone number')
  }

  else {
    showSuccess(phone)
  }

  if (email.value === '') {
    showError(email, 'Email is required')
  }

  else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid')
  }

  else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Password is required')
  }

  else if(!validatePassword(password.value)) {
    showError(password, "Format(special char, number, upper & lower case")
  }
  else {
    showSuccess(password)
  }

 

  if (password2.value === '') {
    showError(password2, 'Password is required')
  }

  else if (password.value !== password2.value) {
    showError(password2, 'Passwords does not match')
  }

  else if(!validatePassword(password2.value)){
    showError(password2, 'password does not match format')
  }
  else if(validatePassword(password2.value < password.length)){
    showError(password2, 'password does not match format')
  }

  else {
    showSuccess(password2);
  }

  if(countrySelect.value === 'select country'){
    showError(countrySelect, 'Select Country')
  }
  else {
    showSuccess(countrySelect)
  }

  if(city.value === '') {
    showError(city, 'Enter city name');
  }
  else {
    showSuccess(city)
  }

  if(skillSelect.value === 'select skill') {
    showError(skillSelect, 'Select a skill');
  }
  else {
    showSuccess(skillSelect)
  }

  if(levelSelect.value === 'select level') {
    showError(levelSelect, 'Select a level');
  }
  else {
    showSuccess(levelSelect)
  }



  // if(newPassword.length < 5 || newPassword.length > 15){
  //   showError(password, "password should contain atleast one number and one special character")
  // }
  // if(!pwdRegex.test(newPassword)) {
  //   alert("password should contain atleast one number and one special character");
  //   return false;
  // }


})