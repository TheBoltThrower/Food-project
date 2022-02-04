const ingredientSelect = document.getElementById('ingredients_select');

const formRecipes = document.getElementById('form_recipes');

const table = document.querySelector('.select--list');

const plus = document.getElementById('plus');

const deleteItem = document.getElementById('delete');



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

formRecipes.addEventListener('submit', e => {
    e.preventDefault();
    var recipes = {
        name: document.getElementById('recipes_name').value,
        ingredient: document.getElementById('ingredientSelect').value
        
    }
    
    recipesAll.push(recipes);
    formRecipes.reset();
    localStorage.setItem('recepti', JSON.stringify(recipesAll));
    
})  

// dodavanje u listu sastojaka sa ikonom +
plus.addEventListener('click', e => {
    //console.log(ingredientSelect.value);
    var y = `<li class="list--item">
    <span>${ingredientSelect.value}</span>                      
        <i class="far fa-trash-alt delete" id="delete"></i>
        </li>`
table.innerHTML += y;
ingredientSelect.selectedIndex = 0;
})


//Brisanje itema iz liste na ikonu kantice
table.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
 });
 //dodavannje u bazu recepata 


