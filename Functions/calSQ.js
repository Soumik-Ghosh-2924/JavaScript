//named function

function csquare(x){
	return x*x;
}

var res= csquare(parseInt(prompt("Enter your number : ")));
console.log("The square of entered num is : " + res);

//anonymous fuction

var cal=function(y)
{
	return y*y;
}

var sq=cal(parseInt(prompt("Enter a number :")));
console.log("The square of the num from anonymous function is : "+sq );

//using the new constructor : 

var ans=new Function ("a","return a*a");
console.log("The square of the number from the constructor function is : ");
console.log(ans(parseInt(prompt("Enter the num :"))));


//self invoking function
(function(a){
	console.log("The square is calculated using the self invoking function :"+a*a);
})(parseInt(prompt("Enter the num for the SIF : ")));