
//Type 3 of assigning Object :
function createPerson()
{
	var person = new Object();
	person.name="Soumik";
	person.designation="Trainer";
	person.phno=786526789;
	return person;
}

var Soumik=createPerson();

//Type 2 of assigning Object :
function createPerson2()
{
	var person = {};
	person.name="Soumik2";
	person.designation="Trainer";
	person.phno=786526789;
	return person;
}

var S=createPerson2();

//Type 3 of assigning Object :
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




//Type 4 of assigning Object :

function createPerson4()
{
	var person={

				name:"Soumik4",
				age:21,
				designation:"Student",
				ph_no: 9876567742
	};
	return person;
}

var P=createPerson4();





//Type 5 of assigning object :
function Person()
{
	this.name="Soumik";
	this.age=21;
}

var X=new Person();
alert("Your name : " +X.name + " your age : "+X.age );





//Type 6 of assigning object : using Object.create() Method

var Animal={

			type:"Invertibrates",
			displayType : function()
			{
				alert("The type of animal is : " + this.type);
			}
}

Animal.displayType();

var sheep = Object.create(Animal);
sheep.type="herbivore";
sheep.displayType();