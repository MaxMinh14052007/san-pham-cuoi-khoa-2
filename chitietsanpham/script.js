import {
  getAuth,
  onAuthStateChanged,
  signOut,
  deleteUser,
} from "../login and register/login(new)/firebaseAuth.js";

const auth = getAuth();
const user = auth.currentUser;

// //logout
document.getElementById("btn").addEventListener("click", function () {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
      alert("Sign-out successful.");
      document.getElementById("logout").style.display = "none";
    })
    .catch((error) => {
      // An error happened.
      console.log("An error happened.");
    });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const email = user.email;
    const username = email.split("@")[0];
    document.getElementById("chuadangnhap").classList.add("hidden");
    document.getElementById("name").innerHTML = "Xin chào" + " " + username;
  } else {
    // User is signed out
    document.getElementById("chuadangnhap").classList.remove("hidden");
    document.getElementById("dadangnhap").classList.add("hidden");
  }
});
