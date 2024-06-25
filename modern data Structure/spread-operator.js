
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

