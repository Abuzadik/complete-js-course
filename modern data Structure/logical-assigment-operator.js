
// const hotelRestaurant = {
//     name: "The Rustic Spoon",
//     openHours: {
//         monday: { open: '9:00 AM', close: ' 10:00 PM' },
//         tuesday: { open: '7:00 AM', close: ' 12:00 PM' },
//         wednesday: { open: '5:00 AM', close: ' 3:00 PM' },
//     },
//     category: ["Casual Dining", "American Cuisine", "Family-Friendly"],
//     starterMenu : ['pizza' , 'pasta' , 'coffee' , 'avocado'],
//     mainMenu: ['steak' , 'fish' , 'oatmeal'],
//     order: function (starterIndex , mainIndex) {
//         return  [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]];
//     },
//     orderDelivery: function({mainIndex = 1 , starterIndex = 2 , address = 'roma italia', time = '1:34PM' }){
//         console.log(`deliveries order to ${address} and order be a ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time}`);
//     },

//     orderPasta : function (ing1 , ing2 , ing3) {
//         console.log(`here is your delicious pasta ${ing1}, ${ing2} and ${ing3}`)
//     },
//     orderPizza : function (mainPizza , ...otherPizza) {
//         console.log(mainPizza)
//         console.log(otherPizza)
//     }
// };

const rest1 = {
    title : 'hargeisa restaurant',
    numOfSeat: 30
}

const rest2 = {
    title : 'hargeisa restaurant',
    owner: 'abdi ahmed'
}

//OR assignment 
// rest1.numOfSeat = rest1.numOfSeat || 11;
// rest2.numOfSeat = rest1.numOfSeat || 11;

rest1.numOfSeat ||= 11;
rest2.numOfSeat ||= 11;


console.log(rest1)
console.log(rest2)