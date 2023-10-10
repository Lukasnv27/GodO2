function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = {
    username,
    password,
  };

  axios
    .post("http://localhost:8888/customer/login", user)
    .then(function (response) {
      location.href = "/chat";
    })
    .catch(function (error) {
      console.log(error);
    });
}
