import brandNavbar from "../components/brandNavbar.js"

let navbar = document.getElementById("nav")

navbar.innerHTML = brandNavbar();

import footer from "../components/footer.js"

let ftr = document.getElementById("footer")

ftr.innerHTML = footer();

let user1 = JSON.parse(localStorage.getItem('loginData')) || false;
let login = document.getElementById('L');
let flag = JSON.parse(localStorage.getItem('loginKey')) || false;
if (flag) {
    login.innerText = `Hi ${user1.first_name}`;
}

//For crauser div

let images = document.querySelector("#crauseImg");
let btn = document.querySelectorAll(".carusebtn");

let imgNum = 0;
let imgArray = [
    "https://www.reliancedigital.in/medias/SONY-BRAVIA-CLP-D.jpg?context=bWFzdGVyfGltYWdlc3w5Nzc2N3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGVlLzk4NzMxNTg5NjMyMzAuanBnfGIxMzdhM2VmMTBhMjZmODZhOGI1MzBjYWZiNzNlYmMwYzg0MGY2ZTY2Y2I0MjlkOTBjY2NmNWZhZmVlNTdlN2M",
    "https://www.reliancedigital.in/medias/LG-RD-CLP-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDA3MDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDk1L2g0Yy85ODczMTU5NDU0NzUwLmpwZ3xiNWE2MDQyMTY2NjA5ZTgwYjE3ZDMyNWQ2MDEzNTIyNTAzYmUyNGUzOGE3ZjYzOGQwNTFkZmEwYTcyZjViM2E1",
    "https://www.reliancedigital.in/medias/RD-website-banners-Website-version-1365-X-260-px-TV.png?context=bWFzdGVyfGltYWdlc3wxMzQ1MTF8aW1hZ2UvcG5nfGltYWdlcy9oMDEvaDNhLzk4NjI0NjcxNTgwNDYucG5nfGNmMDhkNjFlZTNkYzczNDgxZjBjMmIyMmUzMjRiMjBkMmY2ZDkwYTAwNDBlZjhhZDc3NzMzZWEzMmU1ZmZhZjA",
    "https://www.reliancedigital.in/medias/iffalcon-tv-RD-CLP-CLP-D-.jpg?context=bWFzdGVyfGltYWdlc3w5ODk0OXxpbWFnZS9qcGVnfGltYWdlcy9oNjYvaGE3Lzk4NzI2MDg5NTIzNTAuanBnfDUyODYzZWE4YjZlY2Y4MmNiMGM2ZTYzMjU0NTdkMGU5MDYyNTRhMzk5OWJjNjc2ZmM3ZTg2Nzk4NzcyOTUwMjE",

];

btn[0].addEventListener("click", function () {

    if (imgNum === 0) {
        imgNum = imgArray.length - 1
    } else {
        imgNum--;
    }
    images.setAttribute("src", imgArray[imgNum]);
});

btn[1].addEventListener("click", function () {

    if (imgNum === imgArray.length - 1) {
        imgNum = 0
    } else {
        imgNum++;
    }
    images.setAttribute("src", imgArray[imgNum]);
});

// fetch the API

// mid crauser js

let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let data;
let start;
let end;

async function getProductData() {
    let res = await fetch("https://fakestoreapi.com/products/");
    data = await res.json();
    // console.log(data)
    // append(data)
    // let gap=5;
    start = 0;
    end = (data.length / 4);
    let arr1 = []
    for (let i = start; i < end; i++) {
        arr1.push(data[i]);
    }
    // for(let i=5;i<(data.length/4)+5;i++){
    //     arr2.push(data[i]);
    // }
    // for(let i=10;i<(data.length/4)+10;i++){
    //     arr3.push(data[i]);
    // }
    // for(let i=15;i<(data.length/4)+15;i++){
    //     arr4.push(data[i]);
    // }
    console.log(arr1, arr2, arr3, arr4)
    append(arr1)
}

getProductData();


function goNxt() {
    let arr1 = []
    start += 1;
    end += 1;
    if (end > data.length) {
        end = (data.length / 4);
    }
    if (start > data.length - 5) {
        start = 0;
    }
    for (let i = start; i < end; i++) {
        arr1.push(data[i]);
    }
    append(arr1)
}
function goback() {
    let arr1 = []

    end -= 1;
    start = end - 5;
    if (end < 4) {
        end = data.length - 1;
        start = (data.length - 1) - 5;
    }
    // if(start<5){
    //     start=data.length-5;
    // }
    for (let i = end; i >= start; i--) {
        arr1.push(data[i]);
    }
    append(arr1)
}

function append(data) {
    let container = document.getElementById("p_div");
    container.innerHTML = null;

    data.forEach(function (el) {
        let div = document.createElement("div");
        div.setAttribute("class", "pBox");
        let img = document.createElement("img");
        img.src = el.image;
        let name = document.createElement("p");
        name.innerText = el.title;
        name.setAttribute("class", "ptitle")
        let cat = document.createElement("p");
        cat.innerText = `Category- Rs${el.category}`;
        // let des=document.createElement("p");
        // des.innerText=el.description;
        let pri = document.createElement("p");
        pri.innerText = `Price:- Rs.${el.price}`;
        pri.setAttribute("class", "pPrice")
        let rating = document.createElement("p");
        rating.innerText = `Rating:- ★${el.rating.rate}★`;
        div.addEventListener("click", function () {
            addToCart(el);
        })
        div.append(img, name, cat, pri, rating);
        container.append(div)
    });

}


function addToCart(el) {
    console.log(el);
    let arr = [];
    arr.push(el);
    localStorage.setItem("CART_PRODUCT", JSON.stringify(arr));
    window.location.href = "addToCart.html"
}

document.getElementById("left_btn").addEventListener("click", goback);
document.getElementById("right_btn").addEventListener("click", goNxt);