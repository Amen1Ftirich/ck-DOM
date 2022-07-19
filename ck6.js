const plusButtons=document.querySelectorAll('.plus');
const quantity=document.querySelectorAll('.quantity');
const minusButton=document.querySelectorAll('.minus');
const price=document.querySelectorAll('.price');
let sum=document.querySelector('#sum');
const bigContent=document.querySelectorAll('.card');
const deleteButton=document.querySelectorAll('.delete')
for(let i=0;i<plusButtons.length;i++){
  plusButtons[i].addEventListener('click', function (){
    if(quantity[i].innerHTML>=9){
      alert("vous ne pouvez acheter que 9 articles");
    } else {
      quantity[i].innerHTML ++;
      sum.innerHTML=parseInt(sum.innerHTML)+parseInt(price[i].innerHTML);
    }
  });
}

for(let i=0;i<minusButton.length;i++){
  minusButton[i].addEventListener('click', function () {
    if(quantity[i].innerHTML>0){
      quantity[i].innerHTML --;
      sum.innerHTML=parseInt(sum.innerHTML)-parseInt(price[i].innerHTML);
    }
  });
}
for(let i=0;i<deleteButton.length ; i++){
  deleteButton[i].addEventListener('click', function() {
    bigContent[i].remove();
    sum.innerHTML= parseInt(sum.innerHTML)-(price[i].innerHTML)* parseInt(quantity[i].innerHTML)
  });
}  
const likeBtn = document.querySelectorAll(".like__btn");
let likeIcon = document.querySelectorAll(".icon");
console.log(likeIcon)
  count = document.querySelectorAll("#count");

let clicked = false;

for(let i=0; i<likeBtn.length; i++){
    likeBtn[i].addEventListener("click", () => {
    if (!clicked && count[i].textContent==0) {
       /*  clicked = true; */
        likeIcon[i].innerHTML = `<i class="fas fa-thumbs-up"></i>`;
        count[i].textContent++;
    } else {
       /*  clicked = false; */
        likeIcon[i].innerHTML = `<i class="far fa-thumbs-up"></i>`;
        count[i].textContent--;
    }
    });
}