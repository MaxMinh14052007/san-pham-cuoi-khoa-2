var currentUser = JSON.parse(localStorage.getItem("user"));
if (currentUser) {
  // Da dang nhap
  window.location.href = "../chitietsanpham/products.html";
}
function checkLogin() {
  var check = 0;

  var usernameError = document.getElementById("login-usernameError");
  var username = document.getElementById("login-username").value;
  var span = document.createElement("span");
  usernameError.innerHTML = "";
  span.style.color = "red";
  if (username == "") {
    span.innerHTML = "Please fill username";
    usernameError.appendChild(span);
  } else if (username != "") {
    check += 1;
  }

  var passwordError = document.getElementById("login-passwordError");
  var password = document.getElementById("login-password").value;
  var span = document.createElement("span");
  passwordError.innerHTML = "";
  span.style.color = "red";
  if (password == "") {
    span.innerHTML = "Please fill password";
    passwordError.appendChild(span);
  } else if (password != "") {
    check += 1;
  }

  if (check == 2) {
    var userList = JSON.parse(localStorage.getItem("userList")) || [];
    console.log(userList);
    var flag = false;
    if (userList.length > 0) {
      for (var i = 0; i < userList.length; i++) {
        if (
          userList[i].username == username &&
          userList[i].password == password
        ) {
          flag = true;
          break;
        }
      }
      if (flag) {
        var newUser = {
          username: username,
          password: password,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        if (username === "admin") {
          window.location.href = "../danhsachsanpham/index.html"; //trang table
        } else {
          window.location.href = "../chitietsanpham/products.html"; //trang chi tiet sp
        }
      } else {
        document.getElementById("loginError").style.display = "block";
      }
    }
  }
}
var eyeOpen0 = document.getElementById("eye-open");
var eyeClose0 = document.getElementById("eye-close");
var input1 = document.getElementById("login-password");
eyeOpen0.addEventListener("click", function () {
  eyeOpen0.classList.add("hidden");
  eyeClose0.classList.remove("hidden");
  input1.setAttribute("type", "password");
});
eyeClose0.addEventListener("click", function () {
  eyeOpen0.classList.remove("hidden");
  eyeClose0.classList.add("hidden");
  input1.setAttribute("type", "text");
});
