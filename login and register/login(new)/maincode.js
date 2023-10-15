import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "./firebaseAuth.js";
// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
//----- New Registration code start

document.getElementById("register").addEventListener("click", function () {
  var email = document.getElementById("signup_email").value;
  var password = document.getElementById("signup_password").value;
  //For new registration
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      alert("Registration successfully!!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
      alert(error);
    });
});
//----- End

//----- Login code start
document.getElementById("login").addEventListener("click", function () {
  var email = document.getElementById("login_email").value;
  var password = document.getElementById("login_password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // alert(user.email + " Login successfully!!!");
      if (email == "admin@gmail.com") {
        window.location.href =
          "http://127.0.0.1:5500/sanphamcuoikhoa/danhsachsanpham/index.html"; //trang table
      } else {
        window.location.href =
          "http://127.0.0.1:5500/sanphamcuoikhoa/chitietsanpham/products.html"; //trang chi tiet san pham
      }
      document.getElementById("logout").style.display = "block";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
});

// //logout
// document.getElementById("logout").addEventListener("click", function () {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//       console.log("Sign-out successful.");
//       alert("Sign-out successful.");
//       document.getElementById("logout").style.display = "none";
//     })
//     .catch((error) => {
//       // An error happened.
//       console.log("An error happened.");
//     });
// });

//show password login
var eyeOpen0 = document.getElementById("eye-open");
var eyeClose0 = document.getElementById("eye-close");
var input1 = document.getElementById("login_password");

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

//show password register
var eyeOpen = document.getElementById("eye-open1");
var eyeClose = document.getElementById("eye-close1");
var input = document.getElementById("signup_password");
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

//bootstrap js

