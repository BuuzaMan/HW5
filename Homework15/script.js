import menu from  "./menu.json" assert {type: 'json'};
import price from "./price.json" assert {type: 'json'};

//Перепишите цикл, который считает себестоимость блюда из прошлых заданий на функцию, которая использует reduce.
menu.forEach(function (number) {
    let costPrice = number.ingredients.reduce (function (sum, item) {
        return sum + price[item]
    }, 0)
    console.log(costPrice)
})

//Запишите в каждое блюдо себестоимость, используя map и функцию из первого задания.
let newCostPrice = menu.map(function (menuItem) {
    let costPrice = menuItem.ingredients.reduce(function (sum, item){
        return sum + price[item]
    }, 0)
    menuItem = costPrice;
    return menuItem;
});
    console.log(newCostPrice)
    console.log(menu)
// Через object.assign
let costPriceObj = menu.map(function (menuItem) {
    let costPrice = menuItem.ingredients.reduce(function (sum, item){
        return sum + price[item]
    }, 0)
    let newMenuItem = Object.assign({}, menuItem);
    newMenuItem = costPrice
    return newMenuItem
});
console.log(costPriceObj)

//Отфильтруйте меню по какой-то предельной стоимости (например блюда стоимостью менее 100 рублей).
let lower = menu.filter(menuItem => menuItem.price <= 100)
console.log(lower);

//Определите, есть ли в меню хоть одно вегетарианское блюдо, используя some.
let veganMenu = menu.some(function (menuElem){
    console.log(menuElem.name)
    return menuElem.ingredients.every(function (menuIng) {
        console.log(menuIng);
        console.log(menuIng !== "horsemeat" && menuIng !== "mutton" && menuIng !== "beef" && menuIng !== "salmon");
        return(menuIng !== "horsemeat" && menuIng !== "mutton" && menuIng !== "beef" && menuIng !== "salmon");
    });
});
console.log(veganMenu);

//Определите, полностью ли у вас вегетарианское меню с помощью every.
let veganFood = menu.every(function (menuItem) {
    console.log(menuItem.name)
    return menuItem.ingredients.every (function (menuIng){
        console.log(menuIng);
        console.log(menuIng !== "horsemeat" && menuIng !== "mutton" && menuIng !== "beef" && menuIng !== "salmon");
        return(menuIng !== "horsemeat" && menuIng !== "mutton" && menuIng !== "beef" && menuIng !== "salmon");
    });
})
console.log(veganFood)
