function navigatorProperties(){

			document.write( "<br> AppCodeName : " + navigator.appCodeName);
			document.write( "<br> AppName : " + navigator.appName);
			document.write( "<br> Platform : " + navigator.platform);
			document.write( "<br> CookieCheck : " + navigator.cookieEnabled);
			document.write( "<br> Product_Name : " + navigator.product);
			document.write( "<br> User_Agents : " + navigator.userAgent);
}

navigatorProperties();


//All these navigator poperties can be accessed from the console
//using the various properties available directly and check whether 
//the output to our sample code is same as respect to the original 
//results.