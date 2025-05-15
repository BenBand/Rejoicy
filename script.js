function ValiDatE(){
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    const ErrorName = document.getElementById("error-name");
    const ErrorPaSSword = document.getElementById("error-password");

    ErrorName.textContent = "";
    ErrorPaSSword.textContent = "";

    let isValid = "";

    // code for the name validation and error handling
    if(name ===""){
        ErrorName.textContent = "Please enter your name";
        isValid = false;
    }
    if(name === /\d/.test(name)){
        ErrorName.textContent = "Please enter a valid name";
        isValid = false;
    }
    if(name.length <= 3){
        ErrorName.textContent = "Enter a valid username";
        isValid = false;
    }
    if(name.length >= 20){
        ErrorName.textContent = "Name cannot be more than 20 characters";
        isValid = false;
    }

    // Code for password validation and error handling
    if(password === ""){
        ErrorPaSSword.textContent = "Please enter the correct password";
        isValid = false;
    }
    if(password.length < 8){
        ErrorPaSSword.textContent = "Password must be more than 8 characters";
        isValid = false;
    }
    if(password.length >= 10){
        ErrorPaSSword.textContent = "Password must not be more than 8 characters";
        isValid = false;
    }


    // Validation and error handling for the agree section
   /*  if(!Agree){
        ErrorChecked.textContent = "Please agree to the above condition";
    }
    return isValid; */
}