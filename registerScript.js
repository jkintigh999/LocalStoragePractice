const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Adds user data to local storage
function saveData(){
    let name, address, phone, email, password;
    name = document.getElementById("name").value;
    address = document.getElementById("address").value;
    phone = document.getElementById("phone").value;
    email= document.getElementById("email").value;
    password = document.getElementById("password").value;
    console.log(name+address+phone+email+password);

    let user=new Array();
    user=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user.some((v)=>{
        return v.email==email
    })){
        alert("Duplicate Data");
    }
    else{
        user.push({
            "name":name,
            "address":address,
            "phone":phone,
            "email":email,
            "password":password
        })
    }
    localStorage.setItem("users",JSON.stringify(user));
}

//eventListener that checks if info in the fields is up to par
form.addEventListener('submit', function(e){
    e.preventDefault();
    save = 1;

    if(name.value == ''){
        showError(name, "name is required");
        save = 0;
    }
    else{
        showSuccess(name);
    }

    if(email.value == ''){
        showError(email, "Email is required");
        save = 0;
    }
    else{
        showSuccess(email);
    }

    if(password.value == ''){
        showError(password, "Password is required");
        save = 0;
    }
    else{
        showSuccess(password);
    }

    if(password2.value == ''){
        showError(password2, "Password is required");
        save = 0;
    }
    else{
        showSuccess(password2);
    }
    if(address.value == ''){
        showError(address, "Address is required");
        save = 0;
    }
    else{
        showSuccess(address);
    }
    if(phone.value == ''){
        showError(phone, "Phone is required");
        save = 0;
    }
    else{
        showSuccess(phone);
    }

    if(password2.value != password.value){
        showError(password2, 'Passwords do not match');
        save = 0;
    }

    if(save == 1){
        saveData();
        alert("successful registration")
    }
});
