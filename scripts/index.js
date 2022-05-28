//store the products array in localstorage as "products"
function Data(type,desc,price,img){
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=img
}
document.querySelector("#add_product").addEventListener("click",myfun)
let arr=JSON.parse(localStorage.getItem("product"))||[];
function myfun(){
    event.preventDefault()
    var type=document.getElementById("type").value;
    var desc=document.getElementById("desc").value;
    var price=document.getElementById("price").value;
    var img=document.getElementById("image").value;
    let p=new Data(type,desc,price,img)
    //console.log(p)
    arr.push(p)
    localStorage.setItem("product",JSON.stringify(arr))
    document.getElementById("type").value=""
    document.getElementById("desc").value=""
    document.getElementById("price").value=""
    document.getElementById("image").value=""

}
   

