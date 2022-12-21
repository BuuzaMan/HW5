// Найти наименьшее из двух чисел
let first = +prompt("Первое число");
let second = +prompt("Второе число");

alert (` Наименьшее число из чисел ${first} и ${second} - ${minimalNumber(first, second)} `);

function minimalNumber (a,b) {
    return a < b ? a : b;
}

// Расчет профита с блюд
let ingredientsCost = {
    "mutton": 1020,
    "horsemeat":2250,
    "beef":400,
    "onion":20,
    "salt":10,
    "pepper":5,
    "salmon":225,
    "cottageCheese":150,
    "cucumber":50,
    "rice":25,
    "sourCream":100,
    "flour":25,
    };
  
   let menu = [
     {
     name: "buuza",
     ingredients: ["mutton", "horsemeat", "beef", "onion", "salt", "pepper" ],
     price: 5000,
     },
   
    {
    name: "sushi",
    ingredients: ["salmon", "cottageCheese", "cucumber", "rice"],
    price: 600,
    },
    {
    name: "salamat",
    ingredients: ["flour", "sourCream", "salt"],
    price: 250,
    }
   ];

   function calcProfit(ingredients, ingredientsCost, price) {
    let cost = 0; 
     for (let i=0; i < ingredients.length; i++) {
      let ingredientName = ingredients[i];
      cost += ingredientsCost[ingredientName];   
    }
    return price - cost;
   }

   let text = "";
    for (let i = 0; i < menu.length; i++) {
     let profit = '"'+ menu[i].name + '" - ' + (calcProfit(menu[i].ingredients, ingredientsCost, menu[i].price)) + '. ';
   text += profit;}
alert('Выгода ' + text)