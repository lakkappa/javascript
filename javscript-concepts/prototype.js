//This is a prototype inheritance chain
let arr = ["akshay", "aditya"];
let object = {
    name: "akshay",
    city: "dehradun",
    getInfo: function () {
        return this.name + " from " + this.city + " " + this.age;
    }
}

let object2 = {
    name: "Aditya",
    age: 25
}

object2.__proto__ = object

console.log(object.getInfo());

