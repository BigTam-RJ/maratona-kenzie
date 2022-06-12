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
const listProducts = document.querySelector(".product-list");
listProducts.addEventListener("click", addToCart);

function addToCart(event) { /* Captura somente o id do elemento clickado */
    if (event.target.tagName === "IMG") {
        const id = event.target.id;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
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
    for (let i = 0; i < cart.length; i++) {
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
        <div id="product-description">
            <h3>${product.title}</h3>
            <button>
                <img src="./assets/img/trash.png" alt="lixeira">
            </button>
        </div>
        <span>R$${product.price}</span>
    </div>
    `;

    /* pega a li preenchida e renderiza novamente na ul capturada*/
    UL_cart.appendChild(LI_cart);
}