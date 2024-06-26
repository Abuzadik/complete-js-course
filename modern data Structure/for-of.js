const hotel = {
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
    }
};

const menu = [...hotel.mainMenu, ...hotel.starterMenu];
console.log(...menu)

for(const items of menu.entries()) console.log(...items)