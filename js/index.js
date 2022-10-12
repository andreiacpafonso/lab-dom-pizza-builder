// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushrooms').forEach((mushrooms) => {
   if (state.mushrooms) {
    mushrooms.style.visibility = 'visible';
   } else {
mushrooms.style.visibility = 'hidden';
   }
  });
}

function renderGreenPeppers() {
 document.querySelectorAll('.greenPeppers').forEach((greenPeppers) => {
  if (state.greenPeppers) {
    greenPeppers.style.visibility = 'visible';
  } else {
    greenPeppers.style.visibility = 'hidden';
  }
 });
}

function renderWhiteSauce() {
const whiteSauce = document.querySelector('.sauce');
if (state.whiteSauce) {
 whiteSauce.classList.add('renderWhiteSauce');
} else {
  whiteSauce.classList.remove('sauce-white');
}
}

function renderGlutenFreeCrust() {
 const crusts = document.querySelector('.crust');
 if (state.glutenFreeCrust){
  crusts.classList.add('crust-gluten-free');
 } else {
  crusts.classList.remove('crust-gluten-free');
 }
}

function renderButtons() {
  if (state.pepperoni){
    document.querySelector('btn btn-pepperoni').classList.add('active');
   } else {
    document.querySelector('btn.btn-pepperoni').classList.remove('active');
   }
   if (state.greenPeppers){
    document.querySelector('btn.btn-green-peppers').classList.add('active');
   } else {
    document.querySelector('btn.btn-green-peppers').classList.remove('active');
   }
   if (state.mushrooms){
    document.querySelector('btn.btn-mushrooms').classList.add('active');
   } else {
    document.querySelector('btn.btn-mushrooms').classList.remove('active');
   }
    if (state.whiteSauce){
    document.querySelector('btn.btn-white-sauce').classList.add('active');
    } else {
   document.querySelector('btn.btn-white-sauce').classList.remove('active');
    }
    if (state.glutenFreeCrust){
    document.querySelector('.btn.btn-gluten-free-crust').classList.add('active');
    } else {
    document.querySelector('.btn.btn-gluten-free-crust').classList.remove('active');
    }
    

function renderPrice() {
 // NOT COMPLETED YET
} 

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
