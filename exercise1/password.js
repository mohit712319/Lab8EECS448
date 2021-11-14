
let password1=document.getElementById("1stpassword");
let password2=document.getElementById("passwordvalidate");
function validate()
{
  if(password1.value.length>=8)
  {
    if(password2.value.length>=8)
    {
      if(password1.value==password2.value)
      {
        alert("Success");
      }
      else
      {
        alert("Passwords don't match");
      }
    }
    else 
    {
      alert("Retyped password length must be at least 8 characters");
    }
  }
  else
  {
    alert("Password length must be at least 8 characters");
  }

}

