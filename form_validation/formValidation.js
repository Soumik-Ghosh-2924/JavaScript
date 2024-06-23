function Validateform()
{
	//check whether name is added or not.

	var name=document.getElementById("name");
	var phNo=document.getElementById("ph no");

	if(name.value=="")
	{
		alert("Please enter some value in name.");
	}

	if(!isNaN(name.value))
	{
		alert("Please enter valid name since it cannot have digits.");
	}

	if(isNaN(phNo.value))
	{
		alert("Please enter valid phNO since it can have digits only.");
	}

}