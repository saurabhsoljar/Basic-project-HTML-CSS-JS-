let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shoping-cart");


let basket = JSON.parse(localStorage.getItem("data"))|| [];


let calculattion = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+ y, 0);
};

calculattion();

let generateCartItems = () => {
    if (basket.length !== 0) {
    } else {
        ShoppingCart.innerHTML = ``;
        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="index.html">
            <button class="HomeBtn">Back to home</button>
        </a>
        `;
    }
};

generateCartItems();