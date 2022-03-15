
//Spremanje sastojaka u localStorage/Array ingredients = array objekata unesenih
const formIngredients = document.getElementById('form_ingredients');
  
const error = document.getElementById("show-error");

const enterName = document.getElementById('name');

const txtErr = document.getElementById('errtxt');

var ingredients = [];



enterName.addEventListener('input', e => {

    const currentValue = e.target.value;
    const testPattern = /^[a-zA-Z]{3,12}$/;

   
        if(testPattern.test(currentValue)) {
            txtErr.style.display= "none"
        } else {
            txtErr.style.display= "block"

           

}});





formIngredients.addEventListener('submit', e => {
    e.preventDefault();
    console.log('radi');
    
   
    var ingredient = {
        name: document.getElementById('name').value,
        kcal: document.getElementById('kcal').value
    }
 
    
    if(checkIfNameExist()) {
        console.log('nije ok');
        error.classList.remove("hide-error");

        return
    }
   
    
    console.log('prosao');
    ingredients.push(ingredient);
    formIngredients.reset();
    error.classList.add("hide-error");
    //dohvacanje starih sastojaka i dodavanje novih
   
    var old = JSON.parse(localStorage.getItem('sastojci'));

    if(old) {
        localStorage.setItem('sastojci', JSON.stringify(ingredients.concat(old)));
    }  else {
    localStorage.setItem('sastojci', JSON.stringify(ingredients));
}

ingredients = [];
 
}) 
    

//funkcija koja provjerva dali se ponavalja ime sastojka odnosno dali vec postoji u arrayu
var checkIfNameExist = () => {
    var localIgredients = JSON.parse(localStorage.getItem('sastojci')) || [];
    console.log('aaaa', localIgredients,document.getElementById('name').value.toLowerCase())
    

    return localIgredients.some( item => item.name.toLowerCase() === document.getElementById('name').value.toLowerCase());


    /* var check = true;
    ingredients.forEach( item => {
        if (item.name.toLowerCase() === document.getElementById('name').value.toLowerCase()) { 
            
        check  = false 
    } 
    
    });
    return check  */
}


