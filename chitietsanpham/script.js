import products from "../danhsachsanpham/data.js";
console.log(products);
var currentUser = JSON.parse(localStorage.getItem("user"));
var usernameTag = document.getElementById("name");
if (currentUser) {
  usernameTag.innerHTML = "Xin chào" + " " + currentUser.username;
  document.getElementById("chuadangnhap").style.display = "none";
} else {
  document.getElementById("dadangnhap").style.display = "none";
}
var logoutBtn = document.getElementById("btn");
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("user");
  window.location.href = "../login/login.html";
});
