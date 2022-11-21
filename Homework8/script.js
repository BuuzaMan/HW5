let mutton={
 weight: 1500,
 price: 1020,
}
let horsemeat={
 weight: 1500,
 price: 2250,   
}
let pork={
 weight: 750,
 price: 400,   
}
let onion={
 weight: 200,
 price: 20,   
}
let salt={
 weight: 15,
 price: 10,   
}
let pepper={
 weight: 10,
 price: 5,   
}
let salmon={
 weight: 150,
 price: 225,   
}
let cottageCheese={
 weight: 50,
 price:  150,
}
let cucumber={
 weight: 100,
 price: 50,   
}
let rice={
 weight: 300,
 price: 25,   
}
let sourCream={
 weight: 80,
 price: 100,   
}
let flour={
 weight: 80,
 price: 25,   
}

let buuza=['mutton', 'horsemeat', 'pork', 'onion', 'salt', 'pepper'];
let sushi=['salmon', 'cottageCheese', 'cucumber', 'rice'];
let salamat=['sourCream', 'flour', 'salt'];
let menu=['buuza','sushi','salamat'];
buuza.splice (0,1);
menu.splice (0,1);
menu.unshift ('buuza');
menu.splice (1,2);
alert (menu);

let costPriceBuuza=(mutton.price+horsemeat.price+pork.price+onion.price+salt.price+pepper.price);
let costPriceSalamat=(sourCream.price+flour.price+salt.price);
let costPriceSushi=(salmon.price+cottageCheese.price+cucumber.price+rice.price);
let CostPrice=(costPriceBuuza+costPriceSalamat+costPriceSushi);

let newPriceBuuza=(costPriceBuuza * 1.5);
let newPriceSalamat=(costPriceSalamat * 1.5);
let newPriceSushi=(costPriceSushi * 1.5);

let earningsBuuza=(newPriceBuuza-costPriceBuuza);
let earningsSalamat=(newPriceSalamat-costPriceSalamat);
let earningsSushi=(newPriceSushi-costPriceSushi);

alert (`В итоге мы имеем выгоду с продажи бууз ${earningsBuuza}, с продажи Саламата ${earningsSalamat}, с продажи суши ${earningsSushi} `);





