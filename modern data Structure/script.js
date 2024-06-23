'use strict';


const restaurant = {
    name : 'somaliland restaurant',
    address: 'hargeisa somaliland',
    categories: ['breakfast', 'lunch' , 'dinner', 'fastFood'],
    StarterMenu: ['pasta','pizza','salad', 'omelette'],
    mainMenu: ['coffee', 'bread' , 'chicken'],
    orders : function(StarterInd, mainInd){
        const firstOrder = this.StarterMenu;
        const secondOrder = this.mainMenu;
        return [firstOrder[StarterInd], secondOrder[mainInd]]
    }
}


//array destructure 
const [mainMenu1 , mainMenu2 , mainMenu3 ] = restaurant.mainMenu;
console.log(mainMenu1 , mainMenu2 , mainMenu3);

//skipping element 
const [firstEl, ,thirdEl] = restaurant.categories;
console.log(firstEl ,thirdEl);

//function return value 
const [order1 , order2] = restaurant.orders(2 ,2);
console.log(order1 , order2)



//nested array 
const nestedArray = [2,5 ,[7,9]];
const [ q , , x] = nestedArray;
console.log(q,x) // 2 , [7,9]
const [ , b  , [y ,z]] = nestedArray;
console.log(b , y , z) // 5 , 7 ,9

//default value 
let [ a, v ,c ] = [1 ,7];
console.log(a , v , c) // 1 , 7 , (undefined)
let addDefaultValue = [ a , v , c=5];
console.log(addDefaultValue); // 1 , 7 ,5


// assignment 

/*  
    Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating 
    and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount 
    variable should store a number 144584.
*/

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating , ratingsCount)  // 4.19 , 144584


/* 
    Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. 
    Assign the threeStarRatings variable with a default value of 0.
*/

const ratingStars = [63405, 1808];
const [fiveStarRatings , oneStarRatings , threeStarRatings = 0] = ratingStars; 
console.log(fiveStarRatings , oneStarRatings , threeStarRatings); // 63405 , 1809 , 0