let li = document.querySelectorAll(".li");


let li1 = document.getElementById("li1");
let li2 = document.getElementById("li2");
let li3 = document.getElementById("li3");
let li4 = document.getElementById("li4");

li1.addEventListener("click", function() {
    window.scrollTo(0, 0);
    li1.classList.add("active");
    li2.classList.remove("active");
    li3.classList.remove("active");
    li4.classList.remove("active");

});

li2.addEventListener("click", function() {
    window.scrollTo(0, 767);
    li2.classList.add("active");
    li1.classList.remove("active");
    li3.classList.remove("active");
    li4.classList.remove("active");

});
li3.addEventListener("click", function() {
    window.scrollTo(0, 1534);
    li3.classList.add("active");
    li1.classList.remove("active");
    li2.classList.remove("active");
    li4.classList.remove("active");

});
li4.addEventListener("click", function() {
    window.scrollTo(0, 2301);
    li4.classList.add("active");
    li1.classList.remove("active");
    li2.classList.remove("active");
    li3.classList.remove("active");
})




//------------------------------- Another solution by ForEach ------------------------------------


// li.forEach(item => {

//     li[0].addEventListener("click", function() {
//         window.scrollTo(0, 0);
//         item.classList.remove("active");
//         this.classList.add("active");
//     });
//     li[1].addEventListener("click", function() {
//         window.scrollTo(0, 767);
//         item.classList.remove("active");
//         this.classList.add("active");

//     });
//     li[2].addEventListener("click", function() {
//         window.scrollTo(0, 1534);
//         item.classList.remove("active");
//         this.classList.add("active");

//     });
//     li[3].addEventListener("click", function() {
//         window.scrollTo(0, 2301);
//         item.classList.remove("active");
//         this.classList.add("active");

//     });

// })
