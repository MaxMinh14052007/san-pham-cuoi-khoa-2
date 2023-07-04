var currentUser = JSON.parse(localStorage.getItem("user"));
if (currentUser) {
  // Da dang nhap
  window.location.href = "../chitietsanpham/products.html";
}
var username = document.getElementById("register-username");
var password = document.getElementById("register-password");
function checkRegister() {
  var check = 0;

  var usernameError = document.getElementById("register-usernameError");
  var username = document.getElementById("register-username").value;
  usernameError.innerHTML = "";
  usernameError.style.color = "red";
  if (username == "") {
    usernameError.innerHTML = "Please fill username";
  } else if (username != "") {
    usernameError.innerHTML = "";
    check += 1;
  }

  var emailError = document.getElementById("register-emailError");
  var email = document.getElementById("register-email").value;
  email.innerHTML = "";
  emailError.style.color = "red";
  if (email == "") {
    emailError.innerHTML = "Please fill email";
  } else if (password != "") {
    emailError.innerHTML = "";
    check += 1;
  }

  var passwordError = document.getElementById("register-passwordError");
  var password = document.getElementById("register-password").value;
  password.innerHTML = "";
  passwordError.style.color = "red";
  if (password == "") {
    passwordError.innerHTML = "Please fill password";
  } else if (password != "") {
    passwordError.innerHTML = "";
    check += 1;
  }

  var confirmPasswordError = document.getElementById(
    "register-confirmPasswordError"
  );
  var confirmPassword = document.getElementById(
    "register-confirmPassword"
  ).value;
  confirmPasswordError.style.color = "red";
  if (confirmPassword != "" && password == "") {
    confirmPasswordError.innerHTML = "Please fill password";
  } else if (confirmPassword == "") {
    confirmPasswordError.innerHTML = "Please confirm password";
  } else if (password != confirmPassword) {
    confirmPasswordError.innerHTML = "Please confirm your password again";
  } else if (
    confirmPassword != "" &&
    password != "" &&
    confirmPassword == password
  ) {
    confirmPasswordError.innerHTML = "";
    check += 1;
  }
  if (check == 4) {
    var userList = JSON.parse(localStorage.getItem("userList")) || [];
    // || la hoac
    var flag = true;
    if (userList.length > 0) {
      for (var i = 0; i < userList.length; i++) {
        if (userList[i].username == username) {
          flag = false;
          break;
        }
      }
    }
    // Neu dieu kien dung
    if (flag) {
      // them nguoi dung moi vao
      userList.push({
        username: username,
        password: password,
      });
      localStorage.setItem("userList", JSON.stringify(userList));
      document.getElementById("checktk-dung").style.display = "block";
    } else {
      document.getElementById("checktk").style.display = "block";
    }
  }
}

var eyeOpen = document.getElementById("eye-open1");
var eyeClose = document.getElementById("eye-close1");
var input = document.getElementById("register-password");
eyeOpen.addEventListener("click", function () {
  eyeOpen.classList.add("hidden");
  eyeClose.classList.remove("hidden");
  input.setAttribute("type", "password");
});
eyeClose.addEventListener("click", function () {
  eyeOpen.classList.remove("hidden");
  eyeClose.classList.add("hidden");
  input.setAttribute("type", "text");
});

var eyeOpen2 = document.getElementById("eye-open2");
var eyeClose2 = document.getElementById("eye-close2");
var input2 = document.getElementById("register-confirmPassword");
eyeOpen2.addEventListener("click", function () {
  eyeOpen2.classList.add("hidden");
  eyeClose2.classList.remove("hidden");
  input2.setAttribute("type", "password");
});
eyeClose2.addEventListener("click", function () {
  eyeOpen2.classList.remove("hidden");
  eyeClose2.classList.add("hidden");
  input2.setAttribute("type", "text");
});
