// 1
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from saurabh"

let box = document.querySelectorAll(".box");
console.log(box);
// box[0].innerText = "new unique value 1"
// box[1].innerText = "new unique value 2"
// box[2].innerText = "new unique value 3"

let idx = 1;
for(div of box){
    div.innerText = `new unique value ${idx}`
    idx++
}
