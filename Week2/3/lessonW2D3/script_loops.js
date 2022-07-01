let people = ["Greg", "Mary", "Devon", "James"];
console.log("exercise 1.1") ////////////////////////////////////////////////////////////////////
console.log("\n");

for(let i = 0; i < people.length; i++){    // Check output
	console.log(people[i]);
}
console.log("\n");

people.splice(0,1);

for(let i = 0; i < people.length; i++){   // Check output
	console.log(people[i]);
}
console.log("\n");
console.log("exercise 1.2") ////////////////////////////////////////////////////////////////////
console.log("\n");

people.splice(2,1, "Jason");

for(let i = 0; i < people.length; i++){   // Check output
	console.log(people[i]);
}

console.log("\n");
console.log("exercise 1.3") ////////////////////////////////////////////////////////////////////
console.log("\n");

people.push("David");
for(let i = 0; i < people.length; i++){   // Check output
	console.log(people[i]);
}