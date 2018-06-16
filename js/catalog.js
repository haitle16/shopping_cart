/* global Product, Cart */

'use strict';
// Set up an empty cart for use on this page.
var myCart = [];
// var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

    //TODO: Add an <option> tag inside the form's select for each product
    var selectElement = document.getElementById('items');
    for (var i in Product.allProducts) {
        var opEl = document.createElement('option')
        var text = document.createTextNode(Product.allProducts[i].name)
        opEl.appendChild(text);
        selectElement.appendChild(opEl);
        // console.log(Product.allProducts[i]);
        // FIND A WAY TO GET THE NAME POSTED
    }
    ///////////////////////////////////////
    // creating a p tag for cart contents
    var cartTable = document.getElementById('cartContents');
    var pEl = document.createElement('p');
    pEl.textContent = 'Here is what you have inside your cart so far:'
    cartTable.appendChild(pEl);
    ///////////////////////////////////////
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

    // // TODO: Prevent the page from reloading
    // event.preventDefault();
    // // updateCounter(); // i put this here!!
    // // Do all the things ...
    // addSelectedItemToCart();
    // saveToLocalStorage();
    // document.getElementById('cartContents').innerHTML = '';
    // updateCounter();
    // updateCartPreview();
    /////////////////////////////////////////////////
         // TODO: Prevent the page from reloading

    if(document.getElementById('quantity').value){
    event.preventDefault();
    // updateCounter(); // i put this here!!
    // Do all the things ...
    addSelectedItemToCart();
    saveToLocalStorage();
    document.getElementById('cartContents').innerHTML = ''; // clearing the whole div 
    var cartTable = document.getElementById('cartContents');// re-adding the p tag
    var pEl = document.createElement('p');
    pEl.textContent = 'Here is what you have inside your cart so far:'
    cartTable.appendChild(pEl);
    updateCounter();
    updateCartPreview();
    }else{
        event.preventDefault();
        alert('Please input a correct number of products you want to purchase!');
        updateCounter();

    }

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
    // TODO: suss out the item picked from the select list
    var selectedItem = document.getElementById('items').value;
    // TODO: get the quantity
    var selectedQuantity = document.getElementById('quantity').value
    // TODO: using those, add one item to the Cart
    new CartItem(selectedItem, selectedQuantity);
    console.log(myCart);

}

function saveToLocalStorage() {
    // TODO: Fill in this instance method to save the contents of the cart to localStorage
    var totalCart = JSON.stringify(myCart);
    localStorage.setItem('CartSummary', totalCart)
    var singleCartItem;
    for (var i in myCart){
        singleCartItem = JSON.stringify(myCart[i]);
        localStorage.setItem('CartItem: '+myCart[i].product, singleCartItem)
    }
};
/////////////////////////////
// saving it back to myCart
if(localStorage.CartSummary){
    var getCartSummary = localStorage.getItem('CartSummary')
    myCart = JSON.parse(getCartSummary);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
    var cartCounter = document.getElementById('itemCount');
    cartCounter.textContent = 'Your cart have: '+ (myCart.length)+ ' Products.';

}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
    var cartTable = document.getElementById('cartContents');
    var ulEl = document.createElement('ul');
    for (var i = 0 ; i< myCart.length; i++){
        var liEl = document.createElement('li');
        liEl.textContent = 'Product: ' + myCart[i].product + ' &  quantity: ' + myCart[i].quantity;
        ulEl.appendChild(liEl);
    }
    cartTable.appendChild(ulEl);
    // TODO: Get the item and quantity from the form
    // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
updateCartPreview();