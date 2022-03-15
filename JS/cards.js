const finalCard = document.getElementById('grid_item');




var GetNameAndKcal = () => {

    var elements = JSON.parse(localStorage.getItem('recepti'));

   
    elements.forEach ( el => {
        
       
        var card = `<div class="grid--item">
         <div class="item--flex">
               <div>
                  <img class="picture" src="${el.img}" alt="">
                </div>
                  <h1 class="item--name">${el.name}</h1>
                <div class="calories">
                 <h1 class="calories--name">Kcal</h1>
                <span>${el.kcal}</span>
            </div>
        </div>
    </div>`

        finalCard.innerHTML += card;
    });
}
GetNameAndKcal();


