

import brandNavbar from "../components/brandNavbar.js"

let navbar=document.getElementById("nav")

navbar.innerHTML=brandNavbar();

import footer from "../components/footer.js"

let ftr=document.getElementById("footer")

ftr.innerHTML=footer();

let posters=[];

let user = JSON.parse(localStorage.getItem('loginData')) || false;
let login = document.querySelector('#L');
let flag = JSON.parse(localStorage.getItem('loginKey')) || false;
if(flag){
  login.innerText = `Hi ${user.first_name}`;
}

// async function getData(){
//     let res=await fetch("https://fakestoreapi.com/products");
//     let data= await res.json();
//     console.log(data);
// }

// getData();

// let posters=[];

// let posterConsFunc=(i)=>{
//     this.img=i;
// }
function posterConsFunc(i){
    this.img=i;
}


let img1= new posterConsFunc("https://www.reliancedigital.in/medias/HP-Internet-VM-Laptop-cc-CLP-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDA4NDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDY0L2hlMC85ODY3MjgwODQyNzgyLmpwZ3wwODJjNGRmZDc3YTZhYWQ0YjRmNDViZGY4YzJhNGU4NmU1MjU3Y2QyOTRiNmQ1NzNiNTQ4ZTUwYmExY2UxMTM5")
let img2= new posterConsFunc("https://www.reliancedigital.in/medias/intel-12th-Gen-Gaming-Laptop-CLP-Banner-13-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMzc2Mzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGM2L2hiZS85ODU5OTMzNjAxODIyLmpwZ3xjNGFmMmY1OWNlZWJiMmE0N2Y1OGIyMDc2YjBkYjllOWFkMWYzYWMyZTUyMTVkZTY3MTMyOTQ0YzFlZWYxMWVj")
let img3= new posterConsFunc("https://www.reliancedigital.in/medias/Samsung-Galaxy-Book-RD-CLP-D-Banner.jpg?context=bWFzdGVyfGltYWdlc3w5NTI5MHxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaGNiLzk4NzA5MTYyNTU3NzQuanBnfGIwMGIzYmEwYzJjOWI1MzkxYTc0NDdlMWJhYzMzMTFlYzVkYjM5NWY0ZWU5NDEwZGQ0YWE3OTQ1MmQzZDlhYTE")
let img4= new posterConsFunc("https://www.reliancedigital.in/medias/Laptops-D-CLP-Banner-15.07.jpg?context=bWFzdGVyfGltYWdlc3wxMDk1NTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGYwL2g5NC85ODYyMjA2NzgzNTE4LmpwZ3xmMWMwYzdlNjA2MWUzZDA4MTJiYjAzYmMyMDA1NjdhOTgyY2Q3MGQwMWViYjMyNmQxMjNjZmRmNWU5ODVhNjM1")
let img5= new posterConsFunc("https://www.reliancedigital.in/medias/MSI-Laptops-at-never-before-prices-14-06-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMjI0NTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGE1L2gwYS85ODYyMjA2OTE0NTkwLmpwZ3w4ODcwMGM2MmY2ZmFjMGQ0YmYxZGYwNWY5OGY4ZDE4YjI2NGI0NzNjMGRlZjZmMjczYTk3MzRlODVmOTMwYjA5")
let img6= new posterConsFunc("https://www.reliancedigital.in/medias/Lenovo-Doodle-Workshop-Carousel-Banner-26-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMzE1NDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDlmL2g2NC85ODY3MTQ5NTQxNDA2LmpwZ3w4Njk4NjNmOTUyZDJhMjg0NTJkMDNiNGQyZmExNjZlNTZkZjQ1ZDdmYmFiMzU2N2NlYTY3MDhmNTM1ZDI1Zjk2")
let img7= new posterConsFunc("https://www.reliancedigital.in/medias/HP-Spectre-01-RD-CLP-Bannrer-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5ODk2NXxpbWFnZS9qcGVnfGltYWdlcy9oOWMvaGQwLzk4NjcyNzkyNjk5MTguanBnfDRhN2Y2YjJkNDVlODNjYTEzYjFjODU3NDY0YjYyY2YxMDUzZTM5NWI0MjIyMzczNjNkYjRkNTZiMzc0YmFlNGE");

posters.push(img1,img2,img3,img4,img5,img6,img7);

// console.log(posters)
let id1;
let i=0;
let topCarousel=document.getElementById("top_carousel");
let topCarouselImg=document.getElementById("posterImg")
function top_carousel(){
   
    id1=setInterval(function(){
        // topCarousel.innerHTML=null;
        topCarouselImg.src="";
        if(i>=posters.length){
        i=0;
        }
        let img=document.createElement("img");
        // console.log(posters[0].img)
        topCarouselImg.src=posters[i].img;
        // img.setAttribute("class","posterImg")
        // topCarousel.append(img);
        img.addEventListener("click",function(){
            stop();
        });
        i++;
    },2000);
};

top_carousel();

function stop(){
    clearInterval(i)
}

let lftbtn=document.getElementById("left");
console.log(lftbtn);
let rgtbtn=document.getElementById("right");
lftbtn.addEventListener("click",changeImageToPrevious);
rgtbtn.addEventListener("click",changeImageToNxt)

function changeImageToPrevious(){
    // console.log("abc");
    if(i==0){
        i=posters.length-1
    }else{
        i--
    }
    topCarouselImg.src=posters[i].img;
}

function changeImageToNxt(){
    // console.log("abc");
    if(i>=posters.length-1){
        i=0;
    }else{
        i++;
    }
    topCarouselImg.src=posters[i].img;
}

let brandimgs=[
    "https://www.reliancedigital.in/medias/HP-Logo.jpg?context=bWFzdGVyfGltYWdlc3w3MDE0fGltYWdlL2pwZWd8aW1hZ2VzL2g0MC9oN2YvOTExNzQyMTE0MjA0Ni5qcGd8NmJiNTU2N2FlZGQ5ZGFmMTU1NzNhMzRmNmU1NmVkNTA1MjNjYjE4MjQxMmZhZGRkOGZhNDliNDU3ZWFiODdjZg",
    "https://www.reliancedigital.in/medias/Lenovo-Logo.jpg?context=bWFzdGVyfGltYWdlc3w2ODM5fGltYWdlL2pwZWd8aW1hZ2VzL2gxOS9oN2EvOTExNzQyMTMzODY1NC5qcGd8YTRiNzM0MzE5MDliMmRkYjVmMmUzZGYzZjNlYTJiZjIzODJjODFhNzVlMjgyMDRlNTlhM2MzNDg3NGQxNzZlMg",
    "https://www.reliancedigital.in/medias/Dell-Logo.jpg?context=bWFzdGVyfGltYWdlc3w2NDU1fGltYWdlL2pwZWd8aW1hZ2VzL2gyZi9oZjQvOTExNzQyMTIwNzU4Mi5qcGd8OGQ0YWQ0NzFmZGEwNjAyNWRjODVmMmI0MTk1NGNkM2U4MDg2ZTYyMDRkN2U0MmZlOTEzNWE2M2U4ZWQ2NDZkOA",
    "https://www.reliancedigital.in/medias/Acer.jpg?context=bWFzdGVyfGltYWdlc3w2Mzk1fGltYWdlL2pwZWd8aW1hZ2VzL2gxOS9oOWIvOTg1NzUxNDAxMjcwMi5qcGd8YjY5NTFmNmE4NWY1NjYwNDY1ZTc0MmNlZmQwYThkYTE2NTEyZGY4YzNmZjIxMGJlNTk2MDJjY2ZkN2YxMGU4Nw",
    "https://www.reliancedigital.in/medias/Apple-Logo-1.jpg?context=bWFzdGVyfGltYWdlc3wyMjc2fGltYWdlL2pwZWd8aW1hZ2VzL2g3Ny9oMTIvOTExNzQyMTI3MzExOC5qcGd8MzZiYjcyM2E4MzNlZWFmY2I1MDFkMjczYzBlOGQwNTE5ZThhNTRiZTZmNTYxODllNDk3NWQ2YmQ4ZDE3YWQ2NQ",
    "https://www.reliancedigital.in/medias/Asus-Logo.jpg?context=bWFzdGVyfGltYWdlc3w2MjIxfGltYWdlL2pwZWd8aW1hZ2VzL2g5ZS9oMTcvOTExNzQyMTQ2OTcyNi5qcGd8MzM0ZTA3M2Q5M2NhYzlmNGM2MGNkZWIzNGE2OTA1M2EyYjkxYWNhM2NhOTk5MDI3Mjk5YzdiYTg5ZjY4NDAyNw",
    "https://www.reliancedigital.in/medias/Laptops-Shop-By-Brands-Avita.jpg?context=bWFzdGVyfGltYWdlc3w3MTk1fGltYWdlL2pwZWd8aW1hZ2VzL2g2OS9oMTUvOTU4NTU4NDgzMjU0Mi5qcGd8ZmNkMmI3YmEzZjZkNjc2ZGY0ZDBkMzU3NWYxMGJiOGNkY2Q3YjMzZDVmZDgyYmQyZGI3NTA3NGJiYjZhODgxOQ",
    "https://www.reliancedigital.in/medias/Laptops-Shop-By-Brands-VAIO.jpg?context=bWFzdGVyfGltYWdlc3wzMjEwfGltYWdlL2pwZWd8aW1hZ2VzL2hiZS9oNDkvOTU4NTU4NDg5ODA3OC5qcGd8YmMyNWNjNTViNzg1Mzg1OGU4ZDNjYTcxYzA5ZDA4MGNiNjM4YTM3MTJhYTYxODQ5YmI0ZmY0ZjlhZTYzYWUwMw",
];

let carousel_B=document.getElementById("carousel_B");
brandimgs.forEach(function(el){
    let img=document.createElement("img");
    img.src=el;
    img.setAttribute("class","brandimgs")
    carousel_B.append(img)
});

let categoryimgs=[
        "https://www.reliancedigital.in/medias/SHOP-BY-CATEGORY-Basic-use-laptops.jpg?context=bWFzdGVyfGltYWdlc3wzMjM0fGltYWdlL2pwZWd8aW1hZ2VzL2hiOC9oZjAvOTQ3OTg0NDIwMDQ3OC5qcGd8MmMyZTZmMDllZThkY2RhNjU5OGQ4M2VhNGI0NzBhMDMxNzU4NzMzNTYwYWM0ZDJmMzQzMDQ4ZjczODc2ZDUwZQ",
        "https://www.reliancedigital.in/medias/SHOP-BY-CATEGORY-Student-Laptops.jpg?context=bWFzdGVyfGltYWdlc3wzNzkwfGltYWdlL2pwZWd8aW1hZ2VzL2hhMS9oZjkvOTQ3OTg0NDI2NjAxNC5qcGd8Nzc5ZWYzNTEwMzY4YmE5MjgxZTYzYmI3ZmVjZTkzZjJjYTg3ZGM1YjgxYmIzOWFiNWQ0NzYxZTM0MWU0ODEyNg",
        "https://www.reliancedigital.in/medias/SHOP-BY-CATEGORY-Thin-and-light-Laptops.jpg?context=bWFzdGVyfGltYWdlc3wzMzA4fGltYWdlL2pwZWd8aW1hZ2VzL2g0MC9oN2IvOTQ3OTg0NDMzMTU1MC5qcGd8YzgyYTYzY2ZjNTBmMGM1Zjc3ZjcxODhkMDFlM2FjZDY4NzNlMWIxOTYxMTJjMTg3NTJmNGQxM2Q5ZGVhZDY1NA",
        "https://www.reliancedigital.in/medias/SHOP-BY-CATEGORY-Multi-Tasking-Laptops.jpg?context=bWFzdGVyfGltYWdlc3wzNzE1fGltYWdlL2pwZWd8aW1hZ2VzL2g5NS9oYWYvOTQ3OTg0NDM5NzA4Ni5qcGd8N2MzNzNkZTY1YTM1NDQzY2NmN2U2OTYwYmIyM2UwZDEwNDdlNGVlMTgyMjhmMjk4ODFiNGM2YWUxNjMzZTUzNA",
        "https://www.reliancedigital.in/medias/SHOP-BY-CATEGORY-Gaming-Laptops.jpg?context=bWFzdGVyfGltYWdlc3wzNjQ3fGltYWdlL2pwZWd8aW1hZ2VzL2g3Ny9oMTYvOTQ3OTg0NDQ2MjYyMi5qcGd8Njg2MzcwYmJkODUwNWUyZjM4Yzg0ZDlkZmZkZGI4NTgzYzZkY2E5M2VkNzM5YmJlNzAwODU3MjliYjU4Yjk3Yg",
        "https://www.reliancedigital.in/medias/SHOP-BY-CATEGORY-Content-creator-Laptops.jpg?context=bWFzdGVyfGltYWdlc3w0MjQ3fGltYWdlL2pwZWd8aW1hZ2VzL2g1Yy9oMzUvOTQ3OTg0NDUyODE1OC5qcGd8NzZiOGQ0YWI5NjBhZjFmZjgzOGQ4ZWIwMmY5ODdhZjIyNzdkNTU4Njc5NjJjNjdiODYxNTQxNmU3ODhhOGMwMg",
    ]
let carousel_A=document.getElementById("carousel_A");
categoryimgs.forEach(function(el){
    let img=document.createElement("img");
    img.src=el;
    img.setAttribute("class","categoryimgs")
    carousel_A.append(img)
});

let processorimgs=[
        "https://www.reliancedigital.in/medias/Shop-by-Processor-Core-i5.jpg?context=bWFzdGVyfGltYWdlc3w3MjE0fGltYWdlL2pwZWd8aW1hZ2VzL2hjZC9oOGQvOTI5OTk3Nzk5NDI3MC5qcGd8MjEyN2YyYWVmNGFhYjdjN2E0NjYwNzJhMmIwNTFmYTBmYTc0MmM3MjlhMTY2ZjViOWNjMGNkZDE2MWE4ZDYyZg",
        "https://www.reliancedigital.in/medias/Shop-by-Processor-Core-i5.jpg?context=bWFzdGVyfGltYWdlc3w3MjE0fGltYWdlL2pwZWd8aW1hZ2VzL2hjZC9oOGQvOTI5OTk3Nzk5NDI3MC5qcGd8MjEyN2YyYWVmNGFhYjdjN2E0NjYwNzJhMmIwNTFmYTBmYTc0MmM3MjlhMTY2ZjViOWNjMGNkZDE2MWE4ZDYyZg",
        "https://www.reliancedigital.in/medias/processor-i7-i9.jpg?context=bWFzdGVyfGltYWdlc3w3NzQ2fGltYWdlL2pwZWd8aW1hZ2VzL2hhNS9oNWEvOTI5OTk3ODA1OTgwNi5qcGd8OThlMGU3OWI1YjU5NWRmZDZjZTNlZjQ1NDg4Y2ExMGI0MGY3M2ZkOTVjYWFlNjEyMTk4ODUyM2Y2NTlkMjE3MA",
        "https://www.reliancedigital.in/medias/processor-Ryzen.jpg?context=bWFzdGVyfGltYWdlc3w3MjE3fGltYWdlL2pwZWd8aW1hZ2VzL2g1ZC9oNTAvOTI5OTk3ODE5MDg3OC5qcGd8OThhMWE1YWMzMDM5ZWFiOTQ2YzU3MjI0NTJhY2YzOThhOGRkNDU2YjY5NjhmMjk1NmIxYWQ3NGM1YzVhZTgwYg",
        "https://www.reliancedigital.in/medias/Shop-by-Processor-Celeron-PQC.jpg?context=bWFzdGVyfGltYWdlc3w4MDA0fGltYWdlL2pwZWd8aW1hZ2VzL2g4ZS9oY2IvOTI5OTk3ODQyMDI1NC5qcGd8ZmY2MzA3NjYxZTk1OTE5YjBhNmFmNTFkNjhmYzM1ZGE3ZjQ0YmZlNDVjMWIzNjhmM2YzODhkM2Y2ZTExZTNkYw",
    ]

let carousel_C=document.getElementById("carousel_C");
processorimgs.forEach(function(el){
    let img=document.createElement("img");
    img.src=el;
    img.setAttribute("class","processorimgs")
    carousel_C.append(img)
});



let arr1=[];
let arr2=[];
let arr3=[];
let arr4=[];
let data;
let start;
let end;

async function getProductData(){
    let res=await fetch("https://fakestoreapi.com/products/");
     data=await res.json();
    // console.log(data)
    // append(data)
    // let gap=5;
    start=0;
    end=(data.length/4);
     let arr1=[]
    for(let i=start;i<end;i++){
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
console.log(arr1,arr2,arr3,arr4)
append(arr1)
}

getProductData();


function goNxt(){
    let arr1=[]
    start+=1;
    end+=1;
    if(end>data.length){
        end=(data.length/4);
    }
    if(start>data.length-5){
        start=0;
    }
    for(let i=start;i<end;i++){
        arr1.push(data[i]);
    }
    append(arr1)
}
function goback(){
    let arr1=[]
    
    end-=1;
    start=end-5;
    if(end<4){
        end=data.length-1;
        start=(data.length-1)-5;
    }
    // if(start<5){
    //     start=data.length-5;
    // }
    for(let i=end;i>=start;i--){
        arr1.push(data[i]);
    }
    append(arr1)
}

document.getElementById("left_btn").addEventListener("click",goback);
document.getElementById("right_btn").addEventListener("click",goNxt);

function append(data){
    let container=document.getElementById("p_div");
    container.innerHTML=null;

    data.forEach(function(el){
        let div=document.createElement("div");
        div.setAttribute("class","pBox");
        let img=document.createElement("img");
        img.src=el.image;
        let name=document.createElement("p");
        name.innerText=el.title;
        name.setAttribute("class","ptitle")
        let cat=document.createElement("p");
        cat.innerText=`Category- Rs${el.category}`;
        // let des=document.createElement("p");
        // des.innerText=el.description;
        let pri=document.createElement("p");
        pri.innerText=`Price:- Rs.${el.price}`;
        pri.setAttribute("class","pPrice")
        let rating=document.createElement("p");
        rating.innerText=`Rating:- ★${el.rating.rate}★`;
        div.addEventListener("click",function(){
            addToCart(el);
        })
        div.append(img,name,cat,pri,rating);
        container.append(div)
    });

}


function addToCart(el){
    console.log(el);
    let arr=[];
    arr.push(el);
    localStorage.setItem("CART_PRODUCT",JSON.stringify(arr));
    window.location.href="addToCart.html"
}