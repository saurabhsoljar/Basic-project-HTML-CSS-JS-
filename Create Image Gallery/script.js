// let scrollContainer = document.querySelector(".gellery");
// let backBtn = document.getElementById("backBtn");
// let nextBtn = document.getElementById("nextBtn");

// scrollContainer.addEventListener("wheel",(evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });

// nextBtn.addEventListener("click",()=>{
//     scrollContainer.style.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft += 900;
// });

// backBtn.addEventListener("click", ()=>{
//     scrollContainer.style.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft -= 900;
// });



let scrollContainer = document.querySelector(".gallery"); // Corrected typo here
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});
