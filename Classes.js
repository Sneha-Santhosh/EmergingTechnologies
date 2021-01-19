/* Q1. Add two more properties to JavaScript class Car from the lecture example and test them on Babel/JSFiddle. */

class Vehicle {
    constructor(wheels) {
        this.wheels = wheels;
    }
    toString() {
        return '(' + this.wheels + ')';
    }
}
class Car extends Vehicle {
    constructor(color) {
        super(4);
        this.color = color;
    }
    isElectric() {
    return false;
    }
    getBrand() {
    var brand = 'Tesla';
    return brand;
    }
    toString() {
        return super.toString() + ' colored:  ' + this.color +' electric: '+ this.isElectric() + ' brand: ' + this.getBrand();
    }
}
let car = new Car('blue');
console.log(car.toString()); 
console.log(car instanceof Car); 
console.log(car instanceof Vehicle);
