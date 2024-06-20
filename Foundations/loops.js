//loops :

var subjects = ["Maths", "Physics", "Chemistry", "Biology"];
var marks= new Array();
for(var i=0; i<subjects.length; i++)
{
	marks[i]=prompt("enter your marks in " + subjects[i] + " :");
}

for ( x in marks)
{
	console.log("Your marks in "+subjects[x]+" is : "+marks[x]);
}


//while & do while loops
var i=7;
while(i<10)
{
	console.log(i);
	i++;
}

do
{
	console.log(i);
}while(i++<13)