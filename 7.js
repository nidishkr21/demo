var a= [1,2,3,4,5,6,"a","2"];
var b=a.map(function(x){
	if(isNaN(x))
	{
		return x;
	}
	else {
	return x*2;	
	}
	
});
console.log(b);
