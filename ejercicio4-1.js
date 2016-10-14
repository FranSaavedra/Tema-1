/*
Write a function named greaterNum that:
takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").*/

function greaterNum (num1, num2) {
	var num3;
	if (num1 > num2){
		num3 = num1;
	}else if (num2 > num1) {
		num3 = num2;
	}
	document.write("The greater number of " + num1 + " and " + num2 + " is " + num3 + "<br/>");
}
greaterNum(5,8);
greaterNum(6,3);