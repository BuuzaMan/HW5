for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }

let i = 0;
for (; i < 5; i++){
  if (i==5) break;
  console.log(i);
}


 let ingredientsCost = {
  mutton: 1020,
  horsemeat:2250,
  beef:400,
  onion:20,
  salt:10,
  pepper:5,
  salmon:225,
  cottageCheese:150,
  cucumber:50,
  rice:25,
  sourCream:100,
  flour:25,
  };

 let menu = [
   {
   name: 'buuza',
   ingredients: ['mutton', 'horsemeat', 'beef', 'onion', 'salt', 'pepper' ],
   price: 1000,
   },
 
  {
  name: 'sushi',
  ingredients: ['salmon', 'cottageCheese', 'cucumber', 'rice'],
  price: 600,
  },
  {
  name: 'salamat',
  ingredients: ['flour', 'sourCream', 'salt'],
  price: 250,
  }
 ];

 for (let i=0; i < menu.length; i++) {
  let cost = 0; 
  const ingredients = menu[i].ingredients;
  for (let j=0; j < ingredients.length; j++) {
   let ingredientName = ingredients[j];
   let ingredientCost = ingredientsCost[ingredientName];
   cost += ingredientCost;   
  }
   menu[i].cost = cost;
  
   alert(JSON.stringify(menu[i]));

  
 };
 
 