// function curying using the bind method.
let multiply = function (x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 5);
multiplyByThree(5)



// function curying using the closue functions.
let addNos = function (x) {
    return function (y) {
        console.log(x + y);
    }
}

let addTwoNos = addNos(2);
addTwoNos(2)

let addThreeNos = addNos(3);
addThreeNos(3)