const ingredientSelect = document.getElementById('ingredients_select');

const formRecipes = document.getElementById('form_recipes');

const table = document.querySelector('.select--list');

const plus = document.getElementById('plus');

const deleteItem = document.getElementById('delete');



    
var render = () => {
    
    var items = JSON.parse(localStorage.getItem('sastojci'));
    items.forEach( item => {
        
        var x = `<option value="${item.name}">${item.name}</option>`;

        ingredientSelect.innerHTML += x;
    });
    
}
render();

 var recipesAll = [];

formRecipes.addEventListener('submit', e => {
    e.preventDefault();
    var recipes = {
        name: document.getElementById('recipes_name').value,
        ingredient: document.getElementById('select').value
        
    }
    
    recipesAll.push(recipes);
    formRecipes.reset();
    localStorage.setItem('recepti', JSON.stringify(recipesAll));
    
})  


plus.addEventListener('click', e => {
    //console.log(ingredientSelect.value);
    var y = `<li class="list--item">
    <span>${ingredientSelect.value}</span>                      
        <i class="far fa-trash-alt delete" id="delete"></i>
        </li>`
table.innerHTML += y;
ingredientSelect.selectedIndex = 0;
})



table.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
 });

/* table.addEventListener('click', e => {
    if(e.target.classList.contains('.add')) {
        var y = `<li class="list--item">
                 <span>${ingredientSelect.value}</span>                      
        <i class="far fa-trash-alt delete"></i>
     </li>`
        table.innerHTML += y;

    }
}) */



    // if(e.target.classList.contains('delete')){
    //     e.target.parentElement.remove();
    // }
