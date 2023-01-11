'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italin','Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[this.mainIndex]];
    },
};
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);

// cách nhận 2 giá trị trả về từ 1 hàm
const[starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

// cấu trúc hủy lồng nhau
const nested = [2, 4, [5, 6]];
// const [i, j] = nested;
const [i, ,[j, k]] = nested;
console.log(i, j, k);

// giá trị mặc định
const [q=1, u=1, y=1] = [8,9];
console.log(q,u,y);