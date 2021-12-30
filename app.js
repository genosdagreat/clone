const cart = document.getElementById('addtocart');
const sideBar = document.getElementById('sideBar');

cart.addEventListener('click', function () {
    if(cart.innerHTML == "Add to cart") {
        sideBar.style.display ="block";
        cart.innerHTML ="Continue Shopping";
    }else if(cart.innerHTML == "Continue Shopping")  {
        sideBar.style.display = "none";
        cart.innerHTML = "Add to cart";
    }
});



let 
