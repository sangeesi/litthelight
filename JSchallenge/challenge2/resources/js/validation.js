
document.getElementById("submit").onclick = function() {
        validateUser();
        window.alert(txt);
}
function validateUser(){
  let name = document.getElementById("name").value,
      password = document.getElementById("password").value;
  var alphabets = /^[A-Za-z]+$/,
    firstletter = name.charAt(0);

// User name validation

  if (name == null || name == "" || 
  password == null || password == "" || 
  email == null || email == "" || 
  age == null || age == "" ) 
        {
          txt = "Please fill the [username/password/email/age] field";
        }
  else if (!firstletter.match(alphabets))
        {
          txt = "User name should start with alphabets";
        }
  else if ( name.length < 3 )
        { 
          txt = "User name should have atleast 3 characters"
        }
  else
        { 
          txt = "Welcome " + name + "! How are you today?";
        }
return txt; 
      };
