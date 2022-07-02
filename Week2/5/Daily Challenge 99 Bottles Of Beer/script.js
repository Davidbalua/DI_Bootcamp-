

//num = prompt("Please enter a number of bottles to begin with");
let num = 98;
i = 1;

while (num > 0) {

console.log(num + " " + "bottles of beer on the wall");
console.log(num + " " + "bottles of beer");

console.log("Take " + i + " down, pass it around");

num = num - i;
if(num > 0){
console.log(num + " " + "bottles of beer on the wall\n");
i++;
} else if(num == 0){
	console.log(num + " " + "bottles of beer on the wall\n");
} else {
	console.log("no bottle of beer on the wall");
}

}
