let product=JSON.parse(localStorage.getItem("product"))||[];
function showproduct(product){
    document.querySelector("#all_products").innerHTML=null;

product.map(function(el,index){
    let box=document.createElement("div")
    
    let type=document.createElement("p");
    type.innerText=el.type;
    let price=document.createElement("p");
    price.innerText=el.price;
    
    let desc=document.createElement("p");
    desc.innerText=el.desc;
    
    let img=document.createElement("img");
    img.src=el.image;
    let btn=document.createElement("button");
    btn.innerText="REMOVE"
    btn.addEventListener("click",function(){
        remove(index)
    })

    box.append(type,price,desc,img,btn)
    document.querySelector("#all_products").append(box)

    

})
}
showproduct(product)
function remove(index){
    product.splice(index,1)
    localStorage.setItem("product",JSON.stringify(product))
    showproduct(product)

}