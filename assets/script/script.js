/* Captura de Eventos */

/* const listProducts = document.getElementsByClassName("product-list");
console.log(listProducts[0]);
const listProducts = document.querySelector(".product-list");
listProducts.addEventListener("click",captureID);*/

function captureTag1(event){ /* Captura a TAG completa do elemento clickado */
    console.log(event.target);
}

function captureTag2(event){ /* Captura somente o tipo do elemento clickado */
    console.log(event.target.tagName);
}

function captureID(event){ /* Captura somente o id do elemento clickado */
    if(event.target.tagName==="IMG"){
        console.log(event.target.id);
    }
}

/* ---------- Aqui começa o código --------------  */
const cart = [];
const listProducts = document.querySelector(".product-list");
listProducts.addEventListener("click",addToCart);

function addToCart(event){ /* Captura somente o id do elemento clickado */
    if(event.target.tagName==="IMG"){
        const id = event.target.id;
        for (let i=0; i < products.length; i++) {
            if (products[i].id === id ) {
                cart.push(products[i]);
            }
        }
        console.log(cart)
    }
}

const cartProducts = document.querySelector(".products-selected");
cartProducts.addEventListener("click",renderCart);

function renderCart(event){
    
    console.log(event.target);
}