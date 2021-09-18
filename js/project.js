let li = document.querySelectorAll(".li");


// First solution 

let li1 = document.getElementById("li1");
let li2 = document.getElementById("li2");
let li3 = document.getElementById("li3");
let li4 = document.getElementById("li4");

li1.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

li2.addEventListener("click", function() {
    window.scrollTo(0, 767);

});
li3.addEventListener("click", function() {
    window.scrollTo(0, 1534)

});
li4.addEventListener("click", function() {
    window.scrollTo(0, 2301)
})




//------------------------------- Another solution by ForEach ------------------------------------


// li.forEach(item => {

//     li[0].addEventListener("click", function() {
//         window.scrollTo(0, 0);

//     });
//     li[1].addEventListener("click", function() {
//         window.scrollTo(0, 767);

//     });
//     li[2].addEventListener("click", function() {
//         window.scrollTo(0, 1534)

//     });
//     li[3].addEventListener("click", function() {
//         window.scrollTo(0, 2301)

//     });

// })