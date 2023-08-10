let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for(list of lists){
    list.addEventListener("dragstart",function(e){
        let Selected = e.target;

        rightBox.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        rightBox.addEventListener("drop",function(e){
            rightBox.appendChild(Selected);
            Selected = null;
        });
        leftBox.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        leftBox.addEventListener("drop",function(e){
            leftBox.appendChild(Selected);
            Selected = null;
        });
    })
}