/*
Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

var year = 2016;
var birth = 1995;
var age = year - birth;
var age2 = year - birth - 1;

document.write("They are either " + age + " or " + age2 + ", substituting the values.");