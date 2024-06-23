'use strict';

// function calcAge(dof) {
//     const age = 2099 - dof;
//     function printAge() {
//         const str = `${name} youre a ${age} you born ${dof}`
//         console.log(str);
//     }
//     printAge()
//     return age
// }

// const name = 'john'
// calcAge(2000)

// const john = {
//     name: 'ahmed ',
//     age: 20,
//     info: function () {
//         console.log(this)
//         console.log(1998 -this.age)
//     }
// }

// john.info()


// const abokor = {
//     name: 'muuse ',
//     age: 2024,
// }

// abokor.info = john.info;



// const car1 = {
//     brand: 'Toyota',
//     model: 'Camry',
//     startEngine: function() {
//       console.log('Engine started for ' + this.brand + ' ' + this.model);
//     }
//   };
//   car1.startEngine();
  
//   const car2 = {
//     brand: 'Honda',
//     model: 'Accord'
//   };

//   car2.startEngine = car1.startEngine;
//   car2.startEngine();


const person = {
  name: "john",
  year: 1998,

  fullInfo: function () {
    console.log(`your name is ${this.name} and u born ${this.year}`);

    const moreInfo = function () {
      console.log(this);
    };
    moreInfo();
  },
};

person.fullInfo();
