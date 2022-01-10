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
    let mealPlans = [
        {   
            id: 1,
            name: "Sandwich",
            price: 15.35,
            quantity: 1,
            img: "fa-hotdog"
        },
        {
            id: 2,
            name: "Tuna Fish",
            price: 15.35,
            quantity: 1,
            img: "fa-hotdog"
        },
        {
            id: 3,
            name: "Rice",
            price: 15.35,
            quantity: 1,
            img: "fa-hotdog"
        }

    ];

    let mealOptions = [
        {   
            id: 1,
            name: "Beef Burger",
            price: 20,
            quantity: 1,
            img: "https://cdn.pixabay.com/photo/2021/01/06/10/11/burger-5893927_960_720.jpg"
        },
        {   
            id: 2,
            name: "Pizza",
            price: 20,
            quantity: 1,
            img: "https://cdn.pixabay.com/photo/2016/08/05/23/17/pizza-1573562_960_720.jpg"
        },
        {   
            id: 3,
            name: "Steak",
            price: 20,
            quantity: 1,
            img: "https://cdn.pixabay.com/photo/2019/08/26/22/02/steak-4432943_960_720.jpg"
        },
        {   
            id: 4,
            name: "Chicken Burger",
            price: 20,
            quantity: 1,
            img: "https://cdn.pixabay.com/photo/2020/08/05/09/01/hamburger-5464867_960_720.jpg"
        },
        {   
            id: 5,
            name: "Chicken Pizza",
            price: 20,
            quantity: 1,
            img: "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_960_720.jpg"
        },
        {   
            id: 6,
            name: "Steak Burger",
            price: 20,
            quantity: 1,
            img: "https://cdn.pixabay.com/photo/2021/07/29/18/07/burger-6507710_960_720.jpg"
        },
        {   
            id: 7,
            name: "Fries",
            price: 20,
            quantity: 1,
            img: "https://cdn.pixabay.com/photo/2020/08/05/09/01/hamburger-5464867_960_720.jpg"
        }

            

    ] 

    

function init() {
    generateMealPlan();
    generateMealOptions();
    addCustomEventListeners();
    addCustomMealOptionEventListeners();
}

function generateMealPlan() {
    let sidebarContents = document.getElementById('sidebar-list-contents');
    sidebarContents.innerHTML = '';

    for(let item of mealPlans){
        sidebarContents.innerHTML += `
        <div class="sidebar-container-contents" >
            <div class="sidebar-btn" >
                <button class="btncolor10">
                    <i class="fas ${item.img}"></i>
                </button>
            </div>
            <div class="sidebar-quantity">
                <h3>${item.quantity}</h3>
            </div>
            <div class="sidebar-productname">
                <h7>${item.name}</h7>
                <h7 class="sidebar-price">${item.price}</h7>
            </div>
            <div class="sidebar-remove">
                    <i class="fas fa-trash btncolor11" id="mealObj-${item.id}"></i>
            </div>
        </div> 
        `
    }
}


function addCustomEventListeners(){
    const removeBtns = document.querySelectorAll("[id^=mealObj]")
        console.log(removeBtns);
    for(let item of removeBtns){
        item.addEventListener('click', function (el){  
            const id = el.target.id.split('-')[1]    
            console.log(id);
            console.log(el.target);
            removeMealPlan(id)
        });
    }

   
}

function addCustomMealOptionEventListeners(){
    const mealOption = document.querySelectorAll("[id^=mealOptionObj]")
    console.log(mealOption);
    for(let item of mealOption){
        item.addEventListener('click', function (element){
            const id = element.target.id.split('-')[1]
            console.log('id', id);
            console.log('element', element.target)
            addMealPlan(id);
        });
    }
}

function removeMealPlan(id) {
    mealPlans = mealPlans.filter((mealPlan) => {
        return mealPlan.id != id
      })
      generateMealPlan();
      addCustomEventListeners();
}

    init(); //calling of function 

    function addMealPlan(id){
      console.log(id);
        generateMealOptions();
        addCustomMealOptionEventListeners();
    }


function generateMealOptions(){
    let receipesContainer = document.querySelector(".recipes-container");

    receipesContainer.innerHTML = "";
    for(let item of mealOptions){
        receipesContainer.innerHTML += `
                <div class="square-one" id="mealOptionObj-${item.id}">
                    <div class="circle"  id="mealOptionObj-${item.id}"  style= "background-image: ${item.img}"></div>
                    <div class="circle-text"  id="mealOptionObj-${item.id}">
                        <h2 class="square-text">${item.name}</h2>
                        <h3><span class="fa fa-star checked"></span>4.5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$55.35</h3>
                    </div>
                </div>
       
        `
    }

}



//style="z-index: 999; position: relative; width: 100%; height: 100%;"