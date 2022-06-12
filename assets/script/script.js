/* Captura de Eventos */

/* const listProducts = document.getElementsByClassName("product-list");
console.log(listProducts[0]);
const listProducts = document.querySelector(".product-list");
listProducts.addEventListener("click",captureID);*/

function captureTag1(event) { /* Captura a TAG completa do elemento clickado */
    console.log(event.target);
}

function captureTag2(event) { /* Captura somente o tipo do elemento clickado */
    console.log(event.target.tagName);
}

function captureID(event) { /* Captura somente o id do elemento clickado */
    if (event.target.tagName === "IMG") {
        console.log(event.target.id);
    }
}

/* ---------- Aqui começa o código --------------  */
const cart = [];
let total = 0;
let quantity = 0;

const listProducts = document.querySelector(".product-list");
listProducts.addEventListener("click", addToCart);

const removeProducts = document.querySelector(".products-selected");
removeProducts.addEventListener("click", removeFromCart);

function addToCart(event) { /* Captura somente o id do elemento clickado */
    if (event.target.tagName === "IMG") {
        const id = event.target.id;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                //aqui vamos incrementar o valor total usando o preço do produto adicional
                total =  total + parseFloat(products[i].price);
                //alterar no DOM o valor do preço e quantidade
                cart.push(products[i]);
            }
        }
        /* console.log(cart) */
    }
    renderCart();
}

function renderCart() {
    /* captura a ul pela classe */
    const UL_cart = document.querySelector(".products-selected");
    UL_cart.innerHTML = "";

    /* captura o elemento "valor total" pelo ID */
    const total_cart = document.getElementById("total");
    /* console.log(total_cart); */
    let totalString = toNumberString(total);
    total_cart.innerHTML = `R$${totalString}`;
    
    /* captura o elemento "quantidade" pelo ID */
    const quant_cart = document.getElementById("quant");
    /* console.log(total_cart); */
    quantity = cart.length;
    quant_cart.innerHTML = quantity;

    for (let i = 0; i < quantity; i++) {
        createProduct(cart[i]);
    }
}

function createProduct(product) {
    /* captura a ul pela classe */
    const UL_cart = document.querySelector(".products-selected");

     /* cria uma nova li */
    const LI_cart = document.createElement("li");

    /* adiciona uma classe na li, caso necessário */
    /* productCart.className = "classe" */

    /* preenche os elementos na nova li */
    LI_cart.innerHTML = ` 
    <img src=${product.img} alt=${product.title}>
    <div>
        <div class="product-description">
            <h3>${product.title}</h3>
            <button class="trash-btn">
                <img src="./assets/img/trash.png" alt="lixeira">
            </button>
        </div>
        <span>R$${product.price}</span>
    </div>
    `;

    /* pega a li preenchida e renderiza novamente na ul capturada*/
    UL_cart.appendChild(LI_cart);
}

function removeFromCart(event) {
    /* captura o primeiro elemento "li" a parti do elemento clicado (button) */
    /* console.log(event.target.closest("li")); */
    const productToRemove = event.target.closest("li");
    /* aqui devemos remover o produto do arry cart */

    /* remove o elemento selecionado */
    productToRemove.remove();
} 

function toNumberString(num) { 
    if (Number.isInteger(num)) { 
      return num + ".00"
    } else {
      return num.toFixed(2); 
    }
  }