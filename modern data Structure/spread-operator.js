
const hotelRestaurant = {
    name: "The Rustic Spoon",
    openHours: {
        monday: { open: '9:00 AM', close: ' 10:00 PM' },
        tuesday: { open: '7:00 AM', close: ' 12:00 PM' },
        wednesday: { open: '5:00 AM', close: ' 3:00 PM' },
    },
    category: ["Casual Dining", "American Cuisine", "Family-Friendly"],
    starterMenu : ['pizza' , 'pasta' , 'coffee' , 'avocado'],
    mainMenu: ['steak' , 'fish' , 'oatmeal'],
    order: function (starterIndex , mainIndex) {
        return  [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]];
    },
    orderDelivery: function({mainIndex = 1 , starterIndex = 2 , address = 'roma italia', time = '1:34PM' }){
        console.log(`deliveries order to ${address} and order be a ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time}`);
    },

    orderPasta : function (ing1 , ing2 , ing3) {
        console.log(`here is your delicious pasta ${ing1}, ${ing2} and ${ing3}`)
    },
    orderPizza : function (mainPizza , ...otherPizza) {
        console.log(mainPizza)
        console.log(otherPizza)
    }
};


//Without Spread Operator:
const arr = [0, 9 , 8];
const newArr = [1 ,5 , arr[0] , arr[1] , arr[2] , arr[3] = 98];  // arr[3] does not exist in arr so i give a default value
console.log(newArr)

//With Spread Operator:
const newArrWithSpreadOperator = [4 ,6 , 8 ,  ...arr];
console.log(newArrWithSpreadOperator);



//add one more menu in mainMenu 
const newMenu = [...hotelRestaurant.mainMenu , 'rice '];
console.log(...newMenu)

//copy array
const copyArray = [ ...hotelRestaurant.mainMenu];

// join 2 arrays
const menu = [...hotelRestaurant.mainMenu , ...hotelRestaurant.starterMenu];
console.log(menu)

//iterable maps , array , strings , sets NOT objects
const name = 'ahmed';
const newName = [...name , '' , 'ali']
console.log(...newName)


//real world example
// const ingredients = [
// //   prompt("lets ingredients 1?"),
// //   prompt(" ingredients 2?"),
// //   prompt(" ingredients 3?"),
// ]; ;
// console.log(ingredients)
// // hotelRestaurant.orderPasta(ingredients[0] . ingredients[1] , ingredients[2]) // old way
// hotelRestaurant.orderPasta(...ingredients) // spread operator 

//objects 
const newRestaurantCopy = { founded: 1997 , ...hotelRestaurant , founder: 'Abubakar'}
console.log(newRestaurantCopy);
newRestaurantCopy.name = 'somaliland restaurant';
console.log(newRestaurantCopy);
console.log(hotelRestaurant)



// rest pATTERN 1) Destructuring

// spread become a right side =
const spreadArray = [ 2, 3 ,3 , ...[ 4 , 8]];

//rest pattern become a left side =
const [ b , c , ...restArray] =  [0 , 4 , 3 , 2  , 5];
console.log(b , c , restArray);

//example 2 
const [steak , oatmeal , ...others] = [...hotelRestaurant.mainMenu , ...hotelRestaurant.starterMenu]
console.log(steak , oatmeal , others)


//rest pattern in object
const { monday, ...weekdays} = hotelRestaurant.openHours;
console.log(weekdays)

//  rest pattern 2) function
const addNumbers = function (...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) 
    sum += nums[i];
    console.log(sum);
  
};

addNumbers(9 ,9);
addNumbers(10 ,20 ,27 ,9);
addNumbers(9+8 ,9);

//next level
const XL = [ 6 ,7, 88];
addNumbers(...XL)

//last practice Rest pattern and parameters
 hotelRestaurant.orderPizza('mushroom', 'beef', 'ONION' , 'SALAD');
