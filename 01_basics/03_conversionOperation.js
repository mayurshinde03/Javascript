let score = true

console.log(typeof(score));
console.log(typeof score);


let valueInNumber = Number(score)
console.log(valueInNumber);

console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "string" => true