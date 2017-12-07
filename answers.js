// Arrays Loops Conditionals Homework 

// Easy going
for (let i = 1; i <= 20; i++) {
	console.log(i)
}

// Get Even
for (let i = 0; i <= 200; i++) {
	if (i%2 === 0) {
		console.log(i)
	}
}

// Excited Kitten 
let possible = [ "...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

for (i=1; i <= 40; i++) {
	if (i%2 != 0) {
		console.log("Love me, pet me! HSSSSS!")
	} else {
		let min = Math.ceil(0);
		let max = Math.floor(2);
		console.log(possible[Math.floor(Math.random() * (max - min +1))]);
	}
}

// Fizz Buzz

for (i=1; i <=100; i++) {
	if (i%3 == 0 && i%5 == 0) {
		console.log("FizzBuzz");
	} else if (i%3 == 0) {
		console.log("Fizz"); 
	} else if (i%5 == 0) {
		console.log("Buzz");
	} 
}

// Getting to Know You
const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

thom[0] = "Gameboy";
karolin[1] = 17;
matt[2] = "Gotham City";
kristyn.pop();
kristyn.push("Brooklyn");

// Yell at the Ninja Turtles

const turts = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for (i=0; i < turts.length; i++) {
	console.log(turts[i].toUpperCase());
}
