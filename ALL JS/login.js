
import brandNavbar from "../components/brandNavbar.js"

let navbar = document.getElementById("nav")

navbar.innerHTML = brandNavbar();

import footer from "../components/footer.js"

let ftr = document.getElementById("footer")

ftr.innerHTML = footer();


let userData = JSON.parse(localStorage.getItem("RegistrationData")) || [];

let login = (e) => {
    e.preventDefault();
    console.log(userData)
    e.preventDefault();
    let mobileNo = document.getElementById("mobile_no").value;
    let flag = false;

    userData.forEach((el) => {
        if (mobileNo == el.mobile) {
            flag = true;
            localStorage.setItem("loginKey", JSON.stringify(flag))
            gotoHomapage(el);
            alert("Login Successful")
        }
    });

    if (flag == false) {
        alert("Please Register first!");
        window.location.href = './registration.html';
    }
}

let gotoHomapage = (e) => {
    console.log(e)
    localStorage.setItem("loginData", JSON.stringify(e));

    window.location.href = "./index.html"
}

document.querySelector("#submit").addEventListener("click", login);