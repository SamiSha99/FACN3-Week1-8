console.log('hello');


var form = document.getElementById('register');
var errorMessage = document.getElementById('errorMessage')

form.addEventListener('submit', function(event){

  while(errorMessage.firstChild) {
    errorMessage.removeChild(errorMessage.firstChild);
  }

  event.preventDefault();
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var confirmPassword = document.getElementById('confirmPassword');

  console.log(email.value);
  console.log(password.value);
  console.log(confirmPassword.value);

  if(!password.value || !email.value || !confirmPassword.value){
    // alert('Please fill all the requirments');
    var note = document.createElement('h2');
    note.innerText = 'please fill in all the fields';
    note.id = 'err';
    errorMessage.appendChild(note);

  } else {
    if(password.value !== confirmPassword.value){
     // alert('Passwords you have entered do not match!')
     var note = document.createElement('h2');
     note.innerText = 'passwords you have entered do not match!';
     errorMessage.appendChild(note);
    }
  }

});
