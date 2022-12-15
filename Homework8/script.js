let mutton={
 name: 'mutton',
 price: 1020
}
let horsemeat={
 name: 'horsemeat',
 price: 2250  
}
let beef={
 name: 'beef',
 price: 400   
}
let onion={
 name: 'onion',   
 price: 20 
}
let salt={
 name: 'salt',   
 price: 10   
}
let pepper={
 name: 'pepper',   
 price: 5   
}
let salmon={
 name: 'salmon',
 price: 225   
}
let cottageCheese={
 name: 'cottageCheese',   
 price:  150
}
let cucumber={
 name: 'cucumber',
 price: 50   
}
let rice={
 name: 'rice',
 price: 25   
}
let sourCream={
 name: 'sourCream',   
 price: 100   
}
let flour={
 name: 'flour',
 price: 25   
}

let buuza = {
 ingredients: [mutton.name, horsemeat.name, beef.name, onion.name, salt.name, pepper.name],
 costPrice: mutton.price+horsemeat.price+beef.price+onion.price+salt.price+pepper.price,
 margin: 1.5 
};
JSON.stringify(buuza.ingredients)
JSON.stringify(buuza.costPrice)
let sushi = {
 ingredients: [salmon.name, cottageCheese.name, cucumber.name, rice.name],
 costPrice: salmon.price+cottageCheese.price+cucumber.price+rice.price,
 margin: 1.5
};
JSON.stringify(sushi.ingredients)
JSON.stringify(sushi.costPrice)
let salamat={
 ingredients: [flour.name, sourCream.name, salt.price],
 costPrice: flour.price+sourCream.price+salt.price,
 margin: 1.5
};
JSON.stringify(salamat.price)
JSON.stringify(salamat.costPrice)

let menu=['buuza','sushi','salamat'];
menu.shift (0);
menu.unshift ('buuza');
buuza.ingredients.splice(0,1);
menu.splice (1,2);
alert (menu);
alert (buuza.ingredients);

// Общая себестоимость
let CostPrice=buuza.costPrice+salamat.costPrice+sushi.costPrice;
// Стоимость блюда в меню
let newPriceBuuza = buuza.costPrice * buuza.margin;
let newPriceSalamat = salamat.costPrice * salamat.margin;
let newPriceSushi = sushi.costPrice * sushi.margin;
// Расчет выгоды
let earningsBuuza=newPriceBuuza-buuza.costPrice;
let earningsSalamat=newPriceSalamat-salamat.costPrice
let earningsSushi=newPriceSushi-sushi.costPrice;

alert (`В итоге мы имеем выгоду с продажи бууз ${earningsBuuza}, с продажи Саламата ${earningsSalamat}, с продажи суши ${earningsSushi} `);





