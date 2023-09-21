let shop = document.getElementById('shop')

let shopItemsData = [
{
    id:"dsdbskjj",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/img-1.jpg"
},
{
    id: "sdhsadusyiu",
    name: "Offic shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/img-2.jpg"
},
{
    id: "sdhsadutrte",
    name: "T shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/img-3.jpg"
},
{
    id: "sdhsadutrteewq",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/img-4.jpg"
},
]

shopItemsData.price

let basket = JSON.parse(localStorage.getItem("data"))|| [];

let generateShop = () =>{
    return (shop.innerHTML= shopItemsData
        .map((x)=>{
            let{id, name, price, desc,img} =x;
            let search= basket.find((x) => x.id === id)|| []
        return`
        <div id=product-id-$(id) class="item">
            <img width="220px" src="${img}" alt="">
            <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
            <h2>${price}</h2>
            <div class="button">
                <i onclick="docrement(${id})" class="bi bi-dash-lg"></i>
                <div   id=${id} class="quantity">
                ${search.item === undefined ? 0:search.item}
                </div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
        </div>
    
    </div>
</div>
    `;
    }).join(""))
}

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=>x.id === selectedItem.id);

    if(search===undefined){
        basket.push({
            id:selectedItem.id,
            item:1,
        });
    }else{
        search.item +=1;
    }
    localStorage.setItem("data",JSON.stringify(basket));
    // console.log(basket);
    update(selectedItem.id);
}
let docrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=>x.id === selectedItem.id);

    if(search === undefined) return
    else if(search.item===0)return;
    else{
        search.item -=1;
    }
    localStorage.setItem("data",JSON.stringify(basket));

    //console.log(basket);
    update(selectedItem.id);
};
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    console.log(search.item);
   // docrement.getElementById(id).innerHTML = search.item;
   let element = document.getElementById(id);
   if (element) {
       element.innerHTML = search.item;
       calculattion();
   }
};

let calculattion = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+ y, 0);
}

calculattion()