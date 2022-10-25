//  ----------------------Création de fonctions asynchrones pour récupérer les éléments du panier pour la première et du LocalHost pour la deuxème ----------------------

async function getCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    for (let content of cart) {
        console.log(content);
        let productByFetch = await getProductById(content.id);
        console.log(productByFetch);
        cartContainer(content, productByFetch);
        // removeFromBasket(content);
    }
}

async function getProductById(pId) {
    // pId parce qu'on récupère les paramètres de l'Id.
    return await fetch(`http://localhost:3000/api/products/${pId}`)
        .then((response) => response.json())
        .then((data) => { return data });
}

//                                                   ---------------------- FIN DES FONCTIONS FETCH ----------------------



//                                                      ----------------------APPEL DES FONCTIONS ----------------------

getCart();


// ---------------------- création de la fonction pour implémenter mon html avec les éléments du LS (pCartContent) et du LH (pFetchContent) ----------------------


function cartContainer(pCartContent, pFetchContent) {

    let cartArticle = document.createElement("article");
    cartArticle.className = "cart__item";
    cartArticle.dataset.id = pCartContent.id;
    cartArticle.dataset.color = pCartContent.color;
    document.querySelector("#cart__items").appendChild(cartArticle);


    let cartItemImg = document.createElement("div");
    cartItemImg.className = "cart__item__img";
    let cartImg = document.createElement("img");
    cartImg.src = pFetchContent.imageUrl;
    cartImg.alt = pFetchContent.altTxt;
    cartItemImg.appendChild(cartImg);
    cartArticle.appendChild(cartItemImg);


    let cartItemContent = document.createElement("div");
    cartItemContent.className = "cart__item__content";
    cartArticle.appendChild(cartItemContent);


    let cartItemContentDescription = document.createElement("div");
    cartItemContentDescription.className = "cart__item__content__description";
    let itemName = document.createElement("h2");
    itemName.textContent = pFetchContent.name;
    cartItemContentDescription.appendChild(itemName);

    let itemColor = document.createElement("p");
    itemColor.textContent = pCartContent.color;
    cartItemContentDescription.appendChild(itemColor);

    let itemPrice = document.createElement("p");
    itemPrice.textContent = pFetchContent.price + " €";
    cartItemContentDescription.appendChild(itemPrice);
    cartItemContent.appendChild(cartItemContentDescription);


    let cartItemContentSettings = document.createElement("div");
    cartItemContentSettings.className = "cart__item__content__settings";
    cartItemContent.appendChild(cartItemContentSettings);


    let cartItemContentSettingsQty = document.createElement("div");
    cartItemContentSettingsQty.className = "cart__item__content__settings__quantity";
    let quantity = document.createElement("p");
    quantity.textContent = "Qté : ";
    cartItemContentSettingsQty.appendChild(quantity);
    let changeQty = document.createElement("input");
    changeQty.className = "itemQuantity";
    changeQty.name = "itemQuantity";
    changeQty.min = "1";
    changeQty.max = "100";
    changeQty.setAttribute("type", "number");
    changeQty.setAttribute("value", pCartContent.quantity);
    cartItemContentSettingsQty.appendChild(changeQty);
    cartItemContentSettings.appendChild(cartItemContentSettingsQty);

    itemQuantity.addEventListener('click', (ev) => {
        ev.preventDefault();
        const lessQty = itemQuantity.closest('article');
        let minQty = lessQty.getAttribute('min');
        alert(minQty);
        let maxQty = lessQty.getAttribute('max');
        alert(maxQty);
        elementToDelete.remove();

        let cart = JSON.parse(localStorage.getItem('cart'));
        let filteredCart = cart.filter(p => !(p.id == articleId && p.color == articleColor));
        saveCart(filteredCart);
    })
}

    let cartItemContentSettingsDelete = document.createElement("div");
    cartItemContentSettingsDelete.className = "cart__item__content__settings__delete";
    let deleteItem = document.createElement("p");
    deleteItem.className = "deleteItem";
    deleteItem.textContent = "Supprimer";
    cartItemContentSettingsDelete.appendChild(deleteItem);
    cartItemContentSettings.appendChild(cartItemContentSettingsDelete);

    deleteItem.addEventListener('click', (ev) => {
        ev.preventDefault();
        const elementToDelete = deleteItem.closest('article');
        let articleId = elementToDelete.getAttribute('data-id');
        alert(articleId);
        let articleColor = elementToDelete.getAttribute('data-color');
        alert(articleColor);
        elementToDelete.remove();

        let cart = JSON.parse(localStorage.getItem('cart'));
        let filteredCart = cart.filter(p => !(p.id == articleId && p.color == articleColor));
        saveCart(filteredCart);
    })

//                                             ---------------------- Fin de la fonction  ----------------------



//                                  ----------------------Création de la fonction de calcul des totaux----------------------

//     function totalProducts(){ 
//     total = document.querySelector("#totalQuantity");
//     let cart =getCart();
//     let total = 0;
//     for (let product of cart) {
//         total += product.length;
//         return total;
//     }
// }


// function getTotal() {
//     let cart = getCart();
//     let total = document.querySelector

//     total = 0;
//     for (let product of cart) {
//         total += product.quantity * product.price;
//     }
//     return total;
// }



//                                          ----------------------Fin de la fonction de suppression----------------------



//                                           ----------------------Création de la fonction des Regex----------------------



function testRegexFirstName(pElement) {

    let firstName = document.querySelector("#firstname");
    let regexFirstName = new RegExp(/^[a-zA-Z-éèà]/);
    let firstNameTest = regexFirstName.test(firstName.value);
    return firstNameTest;
    
}
// CREER ICI LES MESSAGES D'ERREUR
// const firstNameErrorMsg = document.querySelector("#firstNameErrorMsg");
// firstNameErrorMsg = 

function testRegexLastName(pElement) {

    let lastName = document.querySelector("#lastName");
    let regexLastName = new RegExp(/^[a-zA-Z-éèà]/);
    let regexLastNameTest = regexLastName.test(lastName.value);
    return regexLastNameTest;
}


function testRegexAdress(pElement) {

    let adress = document.querySelector("#adress");
    let regexAdress = new RegExp(/^[0-9]+[a-zA-Z-éèà]/)
    let regexAdressTest = regexAdress.test(adress.value);
    return regexAdressTest;
}

function testRegexAdress(pElement) {

    let city = document.querySelector("#city");
    let regexCity = new RegExp(/^[a-zA-Z-éèà]/);
    let regexCityTest = regexCity.test(city.value);
    return regexCityTest;
}

function testRegexEmail(pElement) {

    let email = document.querySelector("#email");
    let regexEmail = new RegExp(/^[a-zA-Z-éèà]/);
    let regexEmailTest = regexEmail.test(email.value);
    return regexEmailTest;
}

//                                          ----------------------Fin de la fonction des Regex----------------------




// créer le bouton pour modifier la quantité
// calcul des totaux
// post





//   fonction utilisant la methode "post" pour envoyer le formulaire vers le LS

// function postForm() {

    // constante pour selectionner mon bouton puis j'écoute au click et je récupère les données
    // const orderBtn = document.querySelector("#order");
    // orderBtn.addEventListener('click', (ev) => {

    //     ev.preventDefault();

    //     let firstNameFielfunction getTotal() {
//     let cart = getCart();
//     let total = document.querySelector

//     total = 0;
//     for (let product of cart) {
//         total += product.quantity * product.price;
//     }
//     return total;
// }d = document.querySelector("#firstname");
    //     let lastNameField = document.querySelector("#lastName");
    //     let adressField = document.querySelector("#adress");
    //     let cityField = document.querySelector("#city");
    //     let emailField = document.querySelector("#email");
    // }
    // )}


// function getTotalprice() {
//   let cart = getCart();
//   let total = 0;
//   for (let product of cart) {
//     total += product.quantity * product.price;
//   }
//   return total;
// }

