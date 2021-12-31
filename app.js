const cart = document.getElementById('addtocart');
const sideBar = document.getElementById('sideBar');

cart.addEventListener('click', function () {
    if(cart.innerHTML == "Add to cart") {
        sideBar.style.display ="block";
        cart.innerHTML ="Continue Shopping";
    }else if(cart.innerHTML == "Continue Shopping")  {
        sideBar.style.display = "block";
        cart.innerHTML = "Add to cart";
    }
});


    // create a lopp where the add to cart btn changes to continue 
    // shopping text when items have been added to the cart.  

    // It changes to add to cart text when next item is selected

