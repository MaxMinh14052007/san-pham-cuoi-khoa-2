import { getAuth, sendPasswordResetEmail } from "../login(new)/firebaseAuth.js";

document
  .getElementById("button-resetpassword")
  .addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent succesfully,Please check your email");
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log("success");
  });
