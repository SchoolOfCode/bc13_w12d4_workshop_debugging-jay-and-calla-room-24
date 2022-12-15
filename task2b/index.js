
// b missing with numb1 twice within function (or b not needed at all)

function add(numb1, numb2) {
  let num1 = numb1;
  return num1 + numb2;
}

// possible error with passing operator in with a string
// missing a return
// case statement / if statement for the operator 

function multiply(num1, operator, num2) {
  return eval(num1 + operator + num2);
}

// error on return - not actually returning anything

function hasPets(hasPet, firstName, lastName) {
  if (hasPet === true) {
    return firstName + " " + lastName + " really does have a nice pet";
  } else {
    return firstName + " " + lastName + " " + "has no pets";
  }
}

// one is a string and others are numbers 

let myAccountNumbers = {
  account1: 220,
  account2: 144,
  account3: 12,
  account4: 1443,
};

// possible mistake - 1 instead of 0
// possible error - need dot operator

function addsBalanceOfAccounts() {
  let firstAccount = myAccountNumbers["account2"];
  let secondAccount = myAccountNumbers["account3"];
  return firstAccount + secondAccount;
}

// not returning answer in multiple places 

function calculator(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    let answer = firstNumber + secondNumber;
    return answer;
  }
  if (operator === "-") {
    let answer = firstNumber - secondNumber;
    return answer;
  }
  if (operator === "*") {
    let answer = firstNumber * secondNumber;
    return answer;
  }
  if (operator === "/") {
    let answer = firstNumber / secondNumber;
    return answer;
  } else {
    let answer = "Invalid inputs. Try again!";
    return answer;
  }
}

//  Do not change this.
add(2, 5);
multiply(5, "*", 10);
hasPets(true, "henry", "ford");
hasPets(false, "henry", "ford");
calculator(2, "+", 2);
calculator(5, "-", 3);
calculator(3, "*", 4);
calculator(15, "/", 3);
addsBalanceOfAccounts();

module.exports = { add, multiply, hasPets, addsBalanceOfAccounts, calculator };
