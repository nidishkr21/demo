//Double each element of an array 'While handling edge cases'.

var array_1=[1,2,3,4,5,6,"a","2"];
var double_array=array_1.map(function(x){
  if(isNaN(x))
  {
    return x;
  }
  else 
  {
    return x*2; 
  }  
});
console.log(double_array);
