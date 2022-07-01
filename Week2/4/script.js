console.log("\n");
console.log("exercise 1 part 1---------------------------------------------------------------") 
console.log("\n");

infoAboutMe();
function infoAboutMe() {
	console.log("My name is David, 30 years old, like Tennis");
}

console.log("\n");
console.log("exercise 1 part 2--------------------------------------------------------------------") 
console.log("\n");

function infoAboutPerson(personName, personAge, personFavoriteColor){
	console.log(personName, personAge, personFavoriteColor);
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

console.log("\n");
console.log("exercise 2-------------------------------------------------------------------------") 
console.log("\n");

calculateTip();
function calculateTip(){
	//let bill = prompt("John, please enter the amount of the bill", "0");
	bill = "1000"
	bill = parseInt(bill);
	if(bill < 50){
		finalbill = bill + 0.2*bill
	}else if(bill > 50 && bill < 200){
		finalbill = bill + 0.15*bill
	}else{
		finalbill = bill + 0.10*bill
	}
	console.log(finalbill);
}

console.log("\n");
console.log("exercise 3-------------------------------------------------------------------------") 
console.log("\n");

isDivisible();
function isDivisible(){
	let sum = 0;
	for(let i = 0 ; i < 500 ; i++){
		if(i % 23 == 0){
			console.log(i);
			sum = sum +i;
		}
	}
	console.log(sum);
}