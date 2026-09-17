/*function declaraton */
/*function userprofile(name) {

    console.log("hello",name);
    
}
userprofile("Divya");
*/

/*Arrow Function*/
 
/*const double = (number) => {
     return(number*2)
}
console.log(double(8));*/


/*Arrow Function

     setTimeout(function () 
      {
        console.log("hi", greet);
     }, 3000);
*/

 function getuserdata(callback){

    setTimeout(function ()  {

        console.log("user data uploaded")
        callback()
        
    }, 3000);}
getuserdata(function(){
    console.log("call back function")
}

 )
