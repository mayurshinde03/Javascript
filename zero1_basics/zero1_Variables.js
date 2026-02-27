const accountId = 51616
let accountEmail = "mayur@shinde.com"
var accountPass = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed

accountEmail = "gaur@gmail.com"
accountPass = "232"
accountCity = "PUNE"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table({accountId,accountEmail,accountPass,accountCity,accountState})

