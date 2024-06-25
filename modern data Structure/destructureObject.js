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



//basic object destructuring 
const {name , openHours , category} = hotel;
console.log(name , openHours , category); 


//renaming variable during destructure
const {name: ResName , openHours:ResOpenHr , category:tags} = hotel;
console.log(ResName , ResOpenHr , tags); 

//default values 
const {menu = [] , starterMenu: starter = []} = hotel;
console.log(menu , starter); 

//mutating variable 
let newObj = {f:244 , t:667 , u:298}
console.log(newObj)
let newA = 5;
let newB = 6;
(newObj = {newA ,newB}  )
console.log(newObj)

//nested object
const {monday: {open : o , close : xc}} = openHours;
console.log(o ,xc)

// practical destructuring object
hotel.orderDelivery({
    address: 'hargeisa somaliland',
    time: '2:00pm',
    mainIndex: 0,
    starterIndex: 3,
});

hotel.orderDelivery({
    address: 'madrid spain',
});