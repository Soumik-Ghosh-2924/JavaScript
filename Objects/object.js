function createPerson()
{
	var person = new Object();
	person.name="Soumik";
	person.designation="Trainer";
	person.phno=786526789;
	return person;
}

var Soumik=createPerson();

function createPerson2()
{
	var person = {};
	person.name="Soumik2";
	person.designation="Trainer";
	person.phno=786526789;
	return person;
}

var S=createPerson2();


function createPerson3()
{
	var person = {};
	person['name']="Soumik3";
	person['designation']="Trainer";
	person['phno']=786526789;
	return person;
}

var O=createPerson3();

alert("Name : " + O.name + " Designation : "+O.designation +" Phno : "+O.phno);