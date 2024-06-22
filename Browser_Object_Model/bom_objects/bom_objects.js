window.open(); // to open another tab ;


//to move to a new window of specified size :
var nw=window.open("", "newWindow", "height=100, width=200");
nw.moveTo(200,300);


//to move to a new window of specified size :
// var nw2=window.open("http://www.google.com", "newWindow", "height=100, width=200");
// nw2.moveTo(200,300);
// nw2.close();
// window.close();


//If we put all the above statements 
// in a function module then unless the the function 
// is called the statements would not get executed.