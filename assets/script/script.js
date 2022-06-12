const cart = [];

/* const listProducts = document.getElementsByClassName("product-list");
console.log(listProducts[0]); */
const listProducts = document.querySelector(".product-list");

listProducts.addEventListener("click",addToCart);

function addToCart(event){ /* Captura o elemento clickado */
    console.log(event.target);
}
