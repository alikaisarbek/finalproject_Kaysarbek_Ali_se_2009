function validate(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var emailRGEX = /^[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(mail.ru|yahoo.com|gmail.com|yandex.ru)$/;
  var passwordRGEX = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
  var emailResult = emailRGEX.test(email);
  var passwordResult = passwordRGEX.test(password);
  if(emailResult == false)
  {
    alert('Please enter a valid email adress');
    return false;
  }

  if(passwordResult == false)
  {
    alert('Please enter a valid password');
    return false;
  }

  return alert ("Registration was succesful");
}


var form = document.getElementById ("form")

form.addEventListener('submit', function (e) {
    e.preventDefault()
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    fetch("https://my-json-server.typicode.com/alikaisarbek/mockjson/Post", {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
})
