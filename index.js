// Write your solution in this file!
var customerName = "bob"
var bestCustomer
const leastFavoriteCustomer = "peter"

function upperCaseCustomerName (){
    customerName = window.customerName.toUpperCase();
}

function setBestCustomer(){
    return window.bestCustomer = "not bob";
}

function overwriteBestCustomer(){
    return window.bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "sabina"
}


