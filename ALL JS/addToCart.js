

import brandNavbar from "../components/brandNavbar.js"

let navbar = document.getElementById("nav")

navbar.innerHTML = brandNavbar();

import footer from "../components/footer.js"

let ftr = document.getElementById("footer")

ftr.innerHTML = footer();

let user = JSON.parse(localStorage.getItem('loginData')) || false;
let login = document.querySelector('#L');
let flag = JSON.parse(localStorage.getItem('loginKey')) || false;
if (flag) {
    login.innerText = `Hi ${user.first_name}`;
}

let product = JSON.parse(localStorage.getItem("CART_PRODUCT")) || [];

let globalCartArr = JSON.parse(localStorage.getItem("CARTPRODUCT")) || [];

console.log(product)



let showData = (el) => {
    // console.log(el);

    let img = document.getElementById("p_img");
    img.src = el.image;
    let name = document.getElementById("name");
    name.innerText = `★ ${el.title}`;
    let des = document.getElementById("description");
    des.innerText = el.description;
    let pri = +el.price;
    let mrp = (pri + (pri * (23 / 100))).toFixed(2);
    let offr_pri = (pri + (pri * (5 / 100))).toFixed(2);
    let deal_pri = pri;
    let dis = ((mrp - offr_pri) + (offr_pri - deal_pri)).toFixed(2);
    let discount = document.getElementById("discount");
    discount.innerText = `27% (₹${dis})`;
    let deal = document.getElementById("deal_pri");
    deal.innerText = `₹${deal_pri}`;
    let offr = document.getElementById("Offer_pri");
    offr.innerText = `₹${offr_pri}`;
    let mrp_pri = document.getElementById("pri");
    mrp_pri.innerText = `₹${mrp}`;
}

showData(product[0]);


let addToCart = () => {
    globalCartArr.push(product[0]);

    localStorage.setItem("CARTPRODUCT", JSON.stringify(globalCartArr));
    alert("Product Added to the Cart");
    window.location.href = "cart.html"
}
document.getElementById("btn1").addEventListener("click", addToCart);
document.getElementById("btn2").addEventListener("click", addToCart);
//    addToCart();