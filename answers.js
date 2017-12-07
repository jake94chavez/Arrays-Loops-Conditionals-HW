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
