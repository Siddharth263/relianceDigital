
import brandNavbar from "../components/brandNavbar.js"

let navbar = document.getElementById("nav")

navbar.innerHTML = brandNavbar();

import footer from "../components/footer.js"

let ftr = document.getElementById("footer")

ftr.innerHTML = footer();

let userArr = JSON.parse(localStorage.getItem("RegistrationData")) || [];

let register = (e) => {
    e.preventDefault();
    // console.log(e)
    function constructor_Func(n, l, e, m) {
        this.first_name = n;
        this.last_name = l;
        this.email = e;
        this.mobile = m;
    }

    let f_name = document.getElementById("f_name").value;
    let l_name = document.getElementById("l_name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;

    let userObj;
    if (!f_name || !l_name || !email || !mobile) {
        alert("Please fill the details");
    } else {
        userObj = new constructor_Func(f_name, l_name, email, mobile);

        console.log(userObj)
        userArr.push(userObj);
        localStorage.setItem("RegistrationData", JSON.stringify(userArr));
        console.log(userArr);
        window.location.href = "login.html";
    }
}
let form = document.querySelector('#registration_form');
form.addEventListener('submit', register)
