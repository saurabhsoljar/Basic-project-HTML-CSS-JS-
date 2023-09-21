let shop = document.getElementById('shop')

let shopItemsData = [
{
    id:"dsdbskjj",
    name: "Casual Shirt",
    price:45,
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

let generateShop = () =>{
    return (shop.innerHTML= shopItemsData
        .map((x)=>{
            let{id, name, price, desc,img} =x;
        return`
        <div id=product-id-$(id) class="item">
            <img width="220px" src="${img}" alt="">
            <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
            <h2>${price}</h2>
            <div class="button">
                <i class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">0</div>
                <i class="bi bi-plus-lg"></i>
            </div>
        </div>
    
    </div>
</div>
    `;
    }).join(""))
}

generateShop();