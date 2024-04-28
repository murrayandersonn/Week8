//class for vehicles. we get their make, model, year, and milese since oil change. 
//needsOil is a boolean value that will return true if its been more than 5000 miles since oil changes(createCar shows this process later).
class Car {
    constructor(make, model, year, milesSinceOil, needsOil) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.milesSinceOil = milesSinceOil;
        this.needsOil = needsOil;
    }

    
    
    
    
    
}

//garage class to hold all of our cars
class Garage {
    constructor(name) {
        this.name = name;
        this.cars = [];
    }
}

//the bulk of the menu app
class Menu {
    constructor() {
        this.garages = [];
        this.selectedGarage = null;
    }
 
//the initial prompt to start the menu app
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createGarage();
                    break;
                case '2':
                    this.viewGarage();
                    break;
                case '3':
                    this.deleteGarage();
                    break;
                case '4':
                    this.displayGarages();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert ('goodbye!');
    }

//template literal to show the user which option is which
    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create garage
            2) view garage
            3) delete garage
            4) display garages
        `);
    }
//menu option 2 template literal
    showGarageMenuOptions(garageInfo){
        return prompt(`
            0) back
            1) create car
            2) delete car
            --------------------
            ${garageInfo}
        `);
    }
//menu option 4
    displayGarages() {
        let garageString = '';
        for (let i = 0; i < this.garages.length; i++) {
            garageString += i + ') ' + this.garages[i].name + '\n';
        }
        alert(garageString);
    }
//menu options 1 and 3 for creating and deleting garages
    createGarage() {
        let name = prompt('Enter name for new garage: ');
        this.garages.push(new Garage(name));
    }

    deleteGarage() {
        let index = prompt('Enter the index of the garage you want to delete:');
        if (index > -1 && index < this.garages.length) {
            this.garages.splice(index, 1);
        }
    }
//menu option 2 
    viewGarage() {
        let index = prompt('Enter the index of the garage you want to view');
        if (index > -1 && index < this.garages.length) {
            this.selectedGarage = this.garages[index];
            let description = 'Garage Name: ' + this.selectedGarage.name + '\n' + '\n';
                
             
        //this loop iterates through our garage list and records it with the description keyword
            for (let i = 0; i < this.selectedGarage.cars.length; i++) {
               description += i + ') ' + this.selectedGarage.cars[i].year + ' ' + this.selectedGarage.cars[i].make + ' ' + this.selectedGarage.cars[i].model + '\n' +
               '    Needs Oil Change? ' + this.selectedGarage.cars[i].needsOil + '\n'; 



            }
        //selector for adding or removing a car
            let selection = this.showGarageMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createCar();
                    break;
                case '2':
                    this.deleteCar();
            }
        }
        

    }
//functions for adding or removing a car. we also define needsOil based on miles since oil change
    createCar() {
        let make = prompt('Enter the make of your vehicle:');
        let model = prompt('Enter the model of your vehicle:');
        let year = prompt('Enter the year of your vehicle:');
        let milesSinceOil = prompt('How many miles since last oil change?');
        let needsOil = milesSinceOil >= 5000;
        this.selectedGarage.cars.push(new Car(make, model, year, milesSinceOil, needsOil));
    }

    deleteCar() {
        let index = prompt('Enter the index of the vehicle you want to delete:');
        if (index > -1 && index < this.selectedGarage.cars.length) {
            this.selectedGarage.cars.splice(index, 1);
        }
    }

}
//code to start the menu app
let menu = new Menu();
menu.start();