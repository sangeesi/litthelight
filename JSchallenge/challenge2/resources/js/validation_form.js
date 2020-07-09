
function formValidation()
{
    let password = document.registration.password.value,
    username = document.registration.username.value,
    email = document.registration.email.value,
    age = document.registration.age.value;


    if(usernameValidation(username))
        {
        if(passwordValidation(password,7,12))
            {
            if(emailValidation(email))
                {
                if(ageValidation(age))
                {}
                } 
            }
        } 

return false;
}


function passwordValidation(password,min,max)
{
    var password_len = password.value.length;
    if (password_len == 0 ||password_len >= max || password_len < min)
    {
        alert("Password should not be empty / length be between "+min+" to "+max);
        password.focus();
        return false;
    }
        return true;
}

function usernameValidation(username)
{ 
    var letters = /^[A-Za-z]+$/;
    if(username.value.match(letters))
    {
        return true;
    }
    else
    {
        alert("Username must have alphabet characters only");
        username.focus();
        return false;
    }
}

function ageValidation(age)
{ 
var numbers = /^[0-9]+$/;
if(age.value.match(numbers))
{
return true;
}
else
{
alert('Age must have numeric values only');
age.focus();
return false;
}
}

function emailValidation(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}
}