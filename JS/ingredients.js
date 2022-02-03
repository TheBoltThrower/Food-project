
const formIngredients = document.getElementById('form_ingredients');

var ingredients = [];

formIngredients.addEventListener('submit', e => {
    e.preventDefault();
    var ingredient = {
        name: document.getElementById('name').value,
        kcal: document.getElementById('kcal').value
    }
    
    ingredients.push(ingredient);
    formIngredients.reset();
    localStorage.setItem('sastojci', JSON.stringify(ingredients));
    
}) 
    

   

