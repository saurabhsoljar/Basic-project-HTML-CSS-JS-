let shop = document.getElementById('shop')


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
    
    // console.log(basket);
    update(selectedItem.id);

    localStorage.setItem("data",JSON.stringify(basket));
}
let docrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=>x.id === selectedItem.id);

    if(search === undefined) return
    else if(search.item===0)return;
    else{
        search.item -=1;
    }
    update(selectedItem.id);
    basket = basket.filter((x)=>x.item !==0);

    //console.log(basket);
    

    localStorage.setItem("data",JSON.stringify(basket));
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

calculattion();