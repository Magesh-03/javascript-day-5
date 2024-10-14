#1 Class Function - Movie

class Movie {
  constructor(title, studio, rating = "PG")
   
  {this.title = title;
   this.studio = studio;
   this.rating = rating;
  }
   }

//object

let movie1 = new Movie ("Vikarm", "Raaj Kamal", "9.5");
let movie2 = new Movie ("Vikarm", "Raaj Kamal");

console.log(movie1.title)
console.log(movie1.studio)
console.log(movie1.rating)

console.log(movie2.title)
console.log(movie2.studio)
console.log(movie2.rating)

#2 - Class Function - Circle

class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
            this.radius = radius;
    }
    get colorCircle(){
        return this.color;
    }
    set colorCircle(color){
        this.color = color;
    }
    get toString(){
        return `"Circle[radius=${this.radius},colors=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle(){
        return 2 * Math.PI * this.radius;
    }
}
var obj1 = new Circle(1.0,"red");

console.log(obj1.radiusCircle);
obj1.radiusCircle = 2.2
console.log(obj1.radiusCircle);

console.log(obj1.colorCircle);
obj1.colorCircle = "blue";
console.log(obj1.colorCircle);

console.log(obj1.toString);

console.log(obj1.areaCircle);

console.log(obj1.circumferenceCircle);

#3. Write a “person” class to hold all the details.

class Person{
    constructor(name, age, place)
    {
        this.name = name;
        this.age = age;
        this.place = place;
    }
}
    
    let person1 = new Person("Sri", "27", "Coimbatore");
    let person2 = new Person("Kavi", "24", "Chennai");
    let person3 = new Person("Nihaan", "1", "Coimbatore");
    
    console.log(person1.name);
    console.log(person1.age);
    console.log(person1.place);
    
    console.log(person2.name);
    console.log(person2.age);
    console.log(person2.place);
    
    console.log(person3.name);
    console.log(person3.age);
    console.log(person3.place);

#4 : write a class to calculate the uber price.
class UberPriceCalculator {
    constructor() {
      this.baseFare = 60;
      this.costPerKilometer = 15;
      this.costPerMinute = 2.5;
      this.bookingFee = 30;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      // Calculate the fare based on distance and time
      const distanceCost = this.costPerKilometer * distanceInKilometers;
      const timeCost = this.costPerMinute * timeInMinutes;
  
      // Calculate the total price
      const totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;
  
      return totalPrice;
    }
  }
  
  // Example usage:
  const calculator = new UberPriceCalculator();
  const distanceInKilometers = 6.0; // Distance in kilometers
  const timeInMinutes = 10; // Time in minutes
  
  const estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
  console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`);

