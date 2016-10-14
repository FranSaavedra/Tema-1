/*
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune (numChildren, partner, location, job) {
	document.write("You will be a " + job + " in " + location + ", and married to " + partner + " with " + numChildren + " kids." + "<br/>");
}
tellFortune(3,"Paula","Granada","Senior Developer");
tellFortune(1,"Maria","Malaga","Senior Developer");
tellFortune(2,"Laura","Madrid","Senior Developer");