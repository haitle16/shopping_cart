/* global Cart */
'use strict';

var myCart = [];
var delItemArray = [];
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
// var cart;

//////////////////////////////








//////////////////////////////


function loadCart() {
    // var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    // cart = new Cart(cartItems);
    var getCartSummary = localStorage.getItem('CartSummary')
    myCart = JSON.parse(getCartSummary);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
    loadCart();
    clearCart();
    showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}
    document.getElementsByTagName("tbody").innerHTML = ''; // clearing all the tbody
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
    // TODO: Find the table body
    // var tableBody = document.getElementsByTagName("tbody")[0];
    for (var i = 0; i < myCart.length; i++){
        var tableBody = document.getElementsByTagName("tbody")[0];
        var trEl = document.createElement('tr');
///////////////////////
        trEl.setAttribute('onclick','myFunction(this)' );
///////////////////////
        var tdEl = document.createElement('td');
        tdEl.textContent = 'X';
        trEl.appendChild(tdEl);
        // delItemArray.push(i);

        var tdEl = document.createElement('td');
        tdEl.textContent = myCart[i].quantity;
        trEl.appendChild(tdEl);

        var tdEl = document.createElement('td');
        tdEl.textContent = myCart[i].product;
        trEl.appendChild(tdEl);

        var imgEl = document.createElement('img');

        if(myCart[i].product.toLowerCase() === 'usb'){
            imgEl.setAttribute('src', 'assets/'+myCart[i].product.toLowerCase()+'.gif');
        }else if(myCart[i].product.toLowerCase() === 'sweep'){
            imgEl.setAttribute('src', 'assets/'+myCart[i].product.toLowerCase()+'.png');
        }else{
            imgEl.setAttribute('src', 'assets/'+myCart[i].product.toLowerCase()+'.jpg');
        };
        imgEl.setAttribute('alt', 'na');
        imgEl.setAttribute('height', '50px');
        imgEl.setAttribute('width', '50px');
        trEl.appendChild(imgEl);

        tableBody.appendChild(trEl);
    }

    // TODO: Iterate over the items in the cart
    // TODO: Create a TR
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
    ///// START HERE!!!
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    // TODO: Save the cart back to local storage
    // TODO: Re-draw the cart table


}
////////////////////////////// got these from app.js
// removeItem(delItemArray)
function removeItem (num) {
    // TODO: Fill in this instance method to remove one item from the cart.
    // Note: You will have to decide what kind of parameter to pass in here!
    
    for (var i = 0; i < num.length; i++){

        // if(){

        // }
    }
    
};


function myFunction(x) {
    alert("Row index is: " + x.rowIndex);
}



// This will initialize the page and draw the cart on screen
renderCart();