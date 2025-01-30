    const loadAllCocktail = () => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
            .then((res) => res.json())
            .then((data) => {
                    displayDrinks(data.drinks); 
            });
    };




    const displayDrinks = (drinks) => {
        const drinkContainer = document.getElementById("cocktail-container");
        
    
        drinks.forEach((drink) => {
            const div = document.createElement("div");
            div.classList.add("card");

    
            div.innerHTML = `
                <img class="card-img" src="${drink.strDrinkThumb}" alt="...." />
                <h2>Name : ${drink.strGlass}</h2>
                <h4>Category : ${drink.strCategory}</h4>
                <p>Instructions : ${drink.strInstructions}</p>


                <button class="b" id="myBtn" onclick="openModal('${drink.strGlass}','${drink.strDrinkThumb}',
                '${drink.strCategory}','${drink.strAlcoholic}','${drink.strInstructions}')">Details</button>


                <button class="b" onclick="handleAddToCart('${drink.strDrinkThumb}', '${drink.strGlass}',event)">Add to group</button>
            `;

            

        
            drinkContainer.appendChild(div);

        });
    };




    
    loadAllCocktail();




    //2nd part



    const handleSearch=(e)=>{
        const inputValue=document.getElementById("drink-name").value; 
        const container = document.getElementById("cocktail-container");
        container.innerHTML = "";
    
    
    
    
        const load_All_drink = () => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
                .then((res) => res.json())
                .then((data) => {
                    if (!data.drinks) { 
                        displayNotFound(); 
                    } else {
                        display_drink(data.drinks); 
                    }
                });
        };
    
    
    
    
        const display_drink = (drinks) => {
            const drink_Container = document.getElementById("cocktail-container");
            
        
            drinks.forEach((drink) => {
                const div = document.createElement("div");
                div.classList.add("card");

        
                div.innerHTML = `
                <img class="card-img" src="${drink.strDrinkThumb}" alt="...." />
                <h2>Name : ${drink.strGlass}</h2>
                <h4>Category : ${drink.strCategory}</h4>
                <p>Instructions : ${drink.strInstructions}</p>

                <button class="b" id="myBtn" onclick="openModal('${drink.strGlass}','${drink.strDrinkThumb}',
                '${drink.strCategory}','${drink.strAlcoholic}','${drink.strInstructions}')">Details</button>

                <button class="b" onclick="handleAddToCart('${drink.strDrinkThumb}', '${drink.strGlass}',event)">Add to group</button>
            `;

        
                drink_Container.appendChild(div);
    
            });
        };
    
    
        const displayNotFound = () => {
            const div = document.createElement("div");
            div.classList.add("notFound");
    
            div.innerHTML = `
            <h3 style="color:red">No results found!</h3>
            `;
    
            container.appendChild(div);
        };
    
            
        load_All_drink();
    
        document.getElementById("drink-name").value=""; 
    
        }




//3rd part



const handleAddToCart = (img, name, event) => {

    const cartCount = document.getElementById("count").innerText;

    let convertedCount = parseInt(cartCount);
    convertedCount = convertedCount + 1;

    if (convertedCount < 8 && event.target.innerText!= "Added to Cart Successfully") {
        document.getElementById("count").innerText = convertedCount;

        const container = document.getElementById("cart-main-container");

        const div = document.createElement("div");
        div.classList.add("cart-info");

        div.innerHTML = `
            <div class="a">${convertedCount}</div>
            <div class="a"><img class="img-cls" src="${img}"></div>
            <div class="a">${name}</div>
        `;

        container.appendChild(div);

        event.target.innerText = "Added to Cart Successfully";
    } 
    
    else if(convertedCount >= 8){
        alert("Cannot add more than 7 items!");
    }
};







//4th part

const openModal=(name, img, category, type, ins)=>{
        const show = document.getElementById("myModal");

        show.innerHTML = `
        <div class="modal-content" style="background:white; padding:20px; margin:5% auto; width:50%">

            <h2>${name} 
            <span class="close" onclick="closeModal()" style="cursor:pointer; font-size:28px; float:right;">
            &times;
            </span> 
            </h2>
            <hr>

            <img src="${img}" style="width:100%">
            <h4 class="mytext">Category: ${category}</h4>
            <h4>Type: ${type}</h4>
            <p>${ins}</p>
                <hr>

            <span class="close" onclick="closeModal()" style="cursor:pointer; font-size:28px;">
            <button class="myBtn">
            Close
            </button>
            </span>

        </div>
    `;

    show.style.display = "block";

}

const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
};


























    
    
      
    
    
    
    
    
    
    
    
    
        
    
    
    
    
    
    
    
    
    
        
    
    
    
        

    


  









    









    



    