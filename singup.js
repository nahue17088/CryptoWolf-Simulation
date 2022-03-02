// sing up
const singup = (e) => {
  e.preventDefault();
console.log(e)
  let username = document.getElementById(`username`).value;
  let password = document.getElementById(`password`).value;

  let user = {
    username: username,
    password: password,
  };

  let json = JSON.stringify(user);
  localStorage.setItem(user, json);
  console.log("user added");
  window.location.replace("http://127.0.0.1:5501/log.html")
}

$('form').on('submit',singup);