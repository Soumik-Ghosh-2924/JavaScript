//Object property deletion :


var Trainer={

			name:"ABC",
			subjects :["Math","Physics", "Chemistry"],
			teaches : ["First Year","Second Year"],
			age:35
}

var properties=""; //here the value of properties is undefined.
for(p in Trainer)
{
	properties+=p + " : ";
}
console.log("Properties before Deletion : ");
console.log(properties);

delete Trainer.age;

properties="";
for(p in Trainer)
{
	properties+=p +" : ";
}
console.log("Properties after Deletion : ");
console.log(properties);