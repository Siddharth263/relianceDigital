
import brandNavbar from "../components/brandNavbar.js";
document.querySelector("#navbar").innerHTML = brandNavbar();
import footer from "../components/footer.js";
document.querySelector("#footer").innerHTML = footer();
let user1 = JSON.parse(localStorage.getItem('loginData')) || false;
let login = document.querySelector('#L');
let flag = JSON.parse(localStorage.getItem('loginKey')) || false;
if (flag) {
  login.innerText = `Hi ${user1.first_name}`;
}

document.querySelector("#newAddress").addEventListener("click", address);
function address() {
  console.log("hi");
  document.querySelector("#oneAdress").style.display = "block";
}
function cancel() {
  document.querySelector("#oneAdress").style.display = "none";
}

document.querySelector("#adressSubmit").addEventListener("click", submit);
function submit() {
  let user = {
    name: document.querySelector("#fname").value,
    l: document.querySelector("#Lname").value,
    address: document.querySelector("#CN").value,
    pincode: document.querySelector("#pincode").value,
    mobileNo: document.querySelector("#no").value,
  };
  localStorage.setItem("uesrAdress", JSON.stringify(user));
  document.querySelector("#oneAdress").style.display = "none";

  append();
}
function append() {
  let totalprice = JSON.parse(localStorage.getItem("totalprice"));
  console.log(
    "🚀 ~ file: chechout.js ~ line 24 ~ append ~ totalprice",
    totalprice
  );
  document.querySelector("#oneAdress2").style.display = "block";
  let newAdress = JSON.parse(localStorage.getItem("uesrAdress")) || {};
  document.querySelector("#Shippingadress").style.display = "none";
  let div = document.createElement("div");
  let name = document.createElement("h2");
  name.innerText = newAdress.name + newAdress.l;
  let add = document.createElement("p");
  add.innerText = newAdress.address;
  let pin = document.createElement("p");
  pin.innerText = newAdress.pincode;
  let mo = document.createElement("p");
  mo.innerText = newAdress.mobileNo;
  let but = document.createElement("button");
  but.innerText = "DELEVER HERE";
  but.style.backgroundColor = "red";
  but.style.color = "white";
  div.append(name, add, pin, mo);
  document.querySelector("#oneAdress2").append(div);
  document.querySelector("#subto2").innerText = totalprice;
  document.querySelector("#subto1").innerText = totalprice;
}

document.querySelector("#lastbtn").addEventListener("click", lastbtn);
function lastbtn() {
  let totalprice = JSON.parse(localStorage.getItem("totalprice"));
  document.querySelector("#oneAdress2").style.display = "none";
  document.querySelector("#last").style.display = "block";
  document.querySelector("#pta").innerText = `PAY RS  ${totalprice}`;
}
document.querySelector("#pta").addEventListener("click", pta);
function pta() {
  alert("Payment Sucessfull");
  setTimeout(function () {
    alert("Order Confirmed");
    window.location.href = './index.html'
  }, 3000);
}
