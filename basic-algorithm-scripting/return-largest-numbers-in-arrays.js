// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
	// Create final array to return output
	let finalArray = [];

	for (let i = 0; i < arr.length; i++) {
		// Init largest number as first item in array
		let largestNumber = arr[i][0];

		for (let x = 1; x < arr[i].length; x++) {
			if (arr[i][x] > largestNumber) {
				// Loop through numbers in array and assign new number to largest if greater than previous largest number
				largestNumber = arr[i][x];
			}
		}
		// Add largest number into final array
		finalArray.push(largestNumber);
	}
	return finalArray;
}

largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1]
]);
