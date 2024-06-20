age=prompt("Enter your age :");
age=parseInt(age);
if(age>60)
{
	document.write("Old age.");
}
else if(age>35)
{
	document.write("Middle age.");
}
else
{
	document.write("Young age.");
}

Switch case: 

var weight=parseFloat(prompt("Enter your weight: "));
switch(weight)
{
	case 45.5 :
		document.write("your weight is " + weight + "kgs.<br>");
		break;

	case 65.5 :
		document.write("your weight is " + weight + "kgs.<br>");
		break;

	default :
		document.write("your weight is not mentioned .<br>");	
}