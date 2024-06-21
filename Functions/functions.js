//named function

// function addNum(a,b)
// {
// 	console.log(" function addNum is called");
// 	return a+b;
// }

// var x= addNum(2,3);
// console.log("The function returns value : "+x);



// var anon_f=function(a,b)
// {
// 	console.log(" anonymous function called");
// 	return a+b;
// }
// var y=anon_f(2,3);
// console.log(y);


// setTimeout(function(){console.log("anonymous function call in setTimeout");},3000);

//constructor function :

// var c=new Function("a", "b", "console.log('In the constructor function');return a+b;");
// console.log(c(6,9));

//self invoking functions :

(function(a,b){
	console.log("in Self invoking function");
	return a+b;
}(67,87));