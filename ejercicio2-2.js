/*
Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
*/

var myAge = 21;
var maximumAge = 80;
var amount = 1000;

function calculate (age,maximum,amount) {
	return (maximum - age) * amount;
}

document.write("You will need "+ calculate(myAge,maximumAge,amount) + " to last you until the ripe old age of "+ maximumAge);