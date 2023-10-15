import productsData from "./data.js";
import {
  getAuth,
  onAuthStateChanged,
} from "../login and register/login(new)/firebaseAuth.js";

var products = productsData;

function getProducts(products) {
  var tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    var elementTr = document.createElement("tr");
    var stt = document.createElement("td");
    stt.innerHTML = i + 1;
    elementTr.appendChild(stt);
    var productCopy = [...products[i]];
    productCopy.shift();

    for (var j = 0; j < productCopy.length; j++) {
      var elementTd = document.createElement("td");
      elementTd.innerHTML = productCopy[j];
      elementTr.appendChild(elementTd);
    }
    var editTd = document.createElement("td");
    var editBtn = document.createElement("button");

    var deleteTd = document.createElement("td");
    var deleteBtn = document.createElement("button");

    editBtn.innerHTML = "Edit";
    editBtn.classList.add("btn", "btn-primary");
    editTd.appendChild(editBtn);
    elementTr.appendChild(editTd);

    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("btn", "btn-outline-danger");
    deleteTd.appendChild(deleteBtn);
    elementTr.appendChild(deleteTd);

    const productId = products[i][0];
    // deleteBtn.setAttribute("onclick", "deleteTr(" + products[i][0] + ")");
    deleteBtn.addEventListener("click", function () {
      deleteTr(productId);
    });

    tbody.appendChild(elementTr);
  }
}
getProducts(products);

function Check() {
  var ten = document.getElementById("searchValue").value.trim().toLowerCase();

  if (ten == "") {
    getProducts(products);
  } else {
    var searchProducts = [];
    for (var i = 0; i < products.length; i++) {
      if (products[i][1].toLowerCase().includes(ten)) {
        searchProducts.push(products[i]);
      }
    }
    getProducts(searchProducts);
  }
}
var searchValue = document.getElementById("searchValue");
searchValue.addEventListener("change", function () {
  Check();
});

function deleteTr(id) {
  var deleted = [];
  for (var i = 0; i < products.length; i++) {
    if (id != products[i][0]) {
      deleted.push(products[i]);
    }
  }
  products = deleted;
  getProducts(products);
}
var logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", function () {
  // localStorage.removeItem("user");
  window.location.href =
    "http://127.0.0.1:5500/sanphamcuoikhoa/login%20and%20register/login(new)/index.html";
});

// function openCreateModal() {
//   createModal.style.display = "block";
// }

// // Close the create modal
// function closeCreateModal() {
//   createModal.style.display = "none";
// }

// const newTutorial = {
//   title: title,
//   description: description,
//   published: published,
// };

// fetch("http://localhost:8080/api/tutorials", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newTutorial),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     alert("Tutorial created successfully.");
//     location.reload();
//   })
//   .catch((error) => console.error("Error creating tutorial:", error));

// closeCreateModal();

//ngan nguoi ko phai admin vao trang
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    // https://firebase.google.com/docs/reference/js/auth.user
  } else {
    window.location.href =
      "http://127.0.0.1:5500/sanphamcuoikhoa/login%20and%20register/login(new)/index.html";
  }
});
