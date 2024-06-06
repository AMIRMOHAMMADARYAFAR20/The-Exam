"use strict";

import arrowDown from "../assets/icons/down-arrow.svg";
import arrowUp from "../assets/icons/up-arrow.svg";

let data = [];


async function getfoods(){
    const response = await fetch('http://localhost:3131/foods/');
   const data = await response.json();
   
   addData(...data);
   }

   function addData(object) {
     data.push(object);
   }
  
   
   getfoods();
   
  
console.log(data); 


const foodContainer = document.querySelector(".food-container");

const html = `
         <div class="food-card">
        <div class="food-title">
          <img
            alt="Rajab Restaurant"
            src="./src/assets/img/pizza1.png"
            class="food-img"
          />
          <div class="food-descriptions">
            <h4 class = "name">Italy Pizza</h4>
          <div class="food-price">
            <span class = "price">$ 12.99</span>
          </div>
           <div class="food-ingredients">
            <span class ="ingredients">Extra cheese and toping</span>
            </div>
          </div>
        </div>
        <div class="food-qty">
          <span class="qty">1</span>
          <div class="buttons-container">
            <a class="up-arrow">
         <img alt="up-arrow" src="${arrowUp}" />
            </a>
            <a class="down-arrow">
        <img alt="down-arrow" src="${arrowDown}" />
            </a>
          </div> 
        </div>
      </div> 
`;

foodContainer.insertAdjacentHTML("beforeend", html);





















/*

const renderFoodCards = (data) => {
    const foodContainer = document.querySelector(".food-container");
    foodContainer.innerHTML = "";
  
    data.forEach((data) => {
       // Creating food card
      const card = document.createElement("div");
      card.className = "food-card";
  
       // Creating food 
     const foodTitle = document.createElement("div");
      foodTitle.className = "food-title";
  
      // Creating img
       const img = document.createElement("img");
       img.setAttribute("alt", data.name);
       img.setAttribute("src", data.image);
       img.className = "food-img";
  
      // Creating description
       const description = document.createElement("div");
      description.className = "food-descriptions";
      //* Creating description's title
       const title = document.createElement("h4");
       title.className = "name";
      title.textContent =data.name;
      //* Creating description's price
      const foodPrice = document.createElement("div");
      foodPrice.className = "food-price";
      foodPrice.innerText = `$ ${data.price}`;
      //* creating description's ingredients
      const foodIngredients = document.createElement("div");
      foodIngredients.className = "food-ingredients";
      
      //* creating description's Ingredients
      
      const ingredients = document.createElement("span");
      ingredients.className = "ingredients";
      
       // Creating food quantity section
      const foodQty = document.createElement("div");
       foodQty.className = "food-qty";
  
      const qty = document.createElement("span");
      qty.className = "qty";
      qty.innerText = data.qty;
      qty.id = `quantity-${data.id}`;
  
      const buttonsContainer = document.createElement("div");
      buttonsContainer.className = "buttons-container";
  
       const buttonUp = document.createElement("a");
      buttonUp.className = "up-arrow";
     const imgUp = document.createElement("img");
      imgUp.setAttribute("alt", "up-arrow");
      imgUp.setAttribute("src", arrowUp);
     buttonUp.addEventListener("click", function () {
        updateQuantity(data.id, 1);
       });
  
     const buttonDown = document.createElement("a");
      buttonDown.className = "down-arrow";
     buttonDown.addEventListener("click", function () {
        updateQuantity(data.id, -1);
      });
      const imgDown = document.createElement("img");
      imgDown.setAttribute("alt", "down-arrow");
      imgDown.setAttribute("src", arrowDown);
  
       const price = document.createElement("span");
      price.innerText = data.price;
      price.className = "price";
  
     // Appending children for HTML tags
     card.appendChild(foodTitle);
      foodTitle.appendChild(img);
       foodTitle.appendChild(description);
      description.appendChild(title);
  
      foodQty.appendChild(qty);
      foodQty.appendChild(buttonsContainer);
       foodQty.appendChild(price);
      buttonUp.appendChild(imgUp);
      buttonDown.appendChild(imgDown);
      buttonsContainer.appendChild(buttonUp);
       buttonsContainer.appendChild(buttonDown);
  
       card.appendChild(foodQty);
  
      foodContainer.appendChild(card);
     });
   };
  
   const updateQuantity = (productId, change) => {
     const food = data.find((f) => f.id == productId);
     if (food) {
       food.qty += change;
       if (food.qty < 0) {
         food.qty = 0;
       }
      document.getElementById(`quantity-${productId}`).textContent = food.qty;
     }
   };
  
   renderFoodCards(data);
  
*/