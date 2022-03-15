const ingredientSelect = document.getElementById('ingredients_select');

const formRecipes = document.getElementById('form_recipes');

const table = document.querySelector('.select--list');

const plus = document.getElementById('plus');

const deleteItem = document.getElementById('delete');

const ingredientError = document.getElementById('ingredient-error');

const nameError = document.getElementById('name-error');






//Iteriranje kroz array sastojaka i dodavanje htmel templejta u select
var render = () => {
    
    var items = JSON.parse(localStorage.getItem('sastojci'));
    items.forEach( item => {
        
        var x = `<option value="${item.name}">${item.name}</option>`;

        ingredientSelect.innerHTML += x;
    });
    
}
render();
    

//dodavannje u bazu recepata koje trenutno neradi :)
 var recipesAll = [];
 var ings = [];
formRecipes.addEventListener('submit', e => {
    console.log('submit recipes');
    e.preventDefault();
//dohvati sva imena igredianta i stavi ih u array
  
    var ing = document.getElementsByClassName('ingredient_item');
//kada radimo getElementbny class name dobijemo node list i potrebno pretvoriti u array
    [].forEach.call(ing, function (el) {
        ings.push(el.innerText)
    });

    var recipe = {
        name: document.getElementById('recipes_name').value,
        img: document.getElementById('img').value,
        ingredients: ings,
        kcal: 0
    }
   if(!findIfNameIsUniq()) {
       console.log(' isto ime');
       nameError.classList.remove("hide-error");
       return
   }


    if(!checkMinimumTwoIngredients()) {
        console.log(' minimalno 2 sastojka');
        return
    }
    //iteriranje kroz ings te dodavanje kalorija pomocu funkcije koje smo ranije napravili
    ings.forEach( ing => {
        recipe.kcal += getKcalByIngredientName(ing);
    })
    
    
    // recipesAll.push(recipe);
    ings=[];
    table.innerHTML = '';
    formRecipes.reset();
    var oldRecipes = JSON.parse(localStorage.getItem('recepti')) || [];
    oldRecipes.push(recipe)


    localStorage.setItem('recepti', JSON.stringify(oldRecipes));
    location.href = 'file:///C:/Users/Hrvoje/Desktop/Frontend/Food-project/cards.html#';
    

})  

// dodavanje u listu sastojaka sa ikonom +
plus.addEventListener('click', e => {
    //console.log(ingredientSelect.value);
    if(ingredientSelect.value) {
    var y = `<li class="list--item">
    <span class="ingredient_item">${ingredientSelect.value}</span>                      
        <i class="far fa-trash-alt delete" id="delete"></i>
        </li>`

        
table.innerHTML += y;}

ingredientSelect.selectedIndex = 0;
ingredientError.classList.add("hide-error");
})


//Brisanje itema iz liste na ikonu kantice
table.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
 });
 
 var checkMinimumTwoIngredients = () => {
    
    var check = true;

   if(ings.length < 2) {
    ingredientError.classList.remove("hide-error");

    check = false
   };
    

return check 
}

var findIfNameIsUniq = () => {
    
    var find = true;
    recipesAll.forEach( item => {
        if (item.name.toLowerCase() === document.getElementById('recipes_name').value.toLowerCase()) { 
            

        find  = false 
    } 
    
    });
    return find 
}
//funkcija da dohvaca kalorije na temelju imena sastojka
var getKcalByIngredientName = (name) => {

    var ings2 = JSON.parse(localStorage.getItem('sastojci'));
   
    var result = ings2.find(item => item.name.toLowerCase() === name.toLowerCase());


    return Number(result.kcal);

}

console.log(getKcalByIngredientName('Rice'));


