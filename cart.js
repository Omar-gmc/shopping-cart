// variables gloables
const likeBtn = Array.from(document.querySelectorAll(".like-btn"));
const minusBtn = Array.from(document.querySelectorAll(".minus-btn"));
const plusBtn = Array.from(document.querySelectorAll(".plus-btn"));
const quantity = Array.from(document.querySelectorAll(".quantity"));
const price = Array.from(document.querySelectorAll(".unit-price"));
const removeBtn = Array.from(document.querySelectorAll(".remove-btn"));
const totalPrice = document.querySelector(".total-price");

//update total
function updateTotal() {
    let total = 0;
    for (let i = 0; i < quantity.length; i++) {
      total = total + quantity[i].innerText * price[i].innerText;
    }
    totalPrice.innerText = total;
  }
//Change the color of the likeBtn 
function changeColor(el){
    if (el.target.style.color !=="red"){
        el.target.style.color="red";
    }
    else {
        el.target.style.color="black";
    }
}
//fonction pour le bouton(+)
function increment(el){
    el.target.previousElementSibling.innerText= Number(el.target.previousElementSibling.innerText)+1;

updateTotal();
}
//fonction pour le bouton (-)
    function decrement(el) {
        if (Number(el.target.nextElementSibling.innerText) < 1) {
          el.target.nextElementSibling.innerText = 0;
        } else {
            el.target.nextElementSibling.innerText= Number(el.target.nextElementSibling.innerText)-1;
        }
        updateTotal();
}
//removeElement
function removeElement(el) {
    for(i=0;i<removeBtn.length;i++){
    el.target.parentElement.parentElement.remove();
    quantity[i].innerText = 0;}
    updateTotal();
  }


//like btn
for(let i=0;i<plusBtn.length;i++){
likeBtn[i].addEventListener("click",changeColor);

//plus btn
plusBtn[i].addEventListener("click",increment);
//minusBtn
minusBtn[i].addEventListener("click",decrement);
//removeBtn
removeBtn[i].addEventListener("click",removeElement);
}