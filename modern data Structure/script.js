'use strict';


const restaurant = {
    name : 'somaliland restaurant',
    address: 'hargeisa somaliland',
    categories: ['breakfast', 'lunch' , 'dinner', 'fastFood'],
    StarterMenu: ['pasta','pizza','salad', 'omelette'],
    mainMenu: ['coffee', 'bread' , 'chicken']
}


//array destructure 
const [mainMenu1 , mainMenu2 , mainMenu3 ] = restaurant.mainMenu;
console.log(mainMenu1 , mainMenu2 , mainMenu3);