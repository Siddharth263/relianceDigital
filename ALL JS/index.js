import foot from '../components/footer.js';

import brandNavbar from '../components/brandNavbar.js'

let footer = document.querySelector("#footer");
footer.innerHTML = foot();
let user = JSON.parse(localStorage.getItem('loginData')) || false;

let cart = document.querySelector("#C");

function gotocart() {
  if (flag) {
    window.location.href = './cart.html'
  }
  else {
    alert('Please login first!');
    window.location.href = 'login.html';
  }
}
cart.addEventListener('click', gotocart);

let login = document.querySelector('#L');
let flag = JSON.parse(localStorage.getItem('loginKey')) || false;
if (flag) {
  login.innerText = `Hi ${user.first_name}`;
}
