//Print a star pyramid

var str=""
var b=50; //base of the pyramid.
var n=(b+1)/2;
for(var i=1; i<=n;i++)
{
  for(var j=1;j<=n-i;j++){
    str += " ";
  }
  
  for(var k=1;k<=2*i-1;k++){
    str +="*";
  }
  
  for(var l=1;l<=n-i;l++){
    str +=" ";
  }
  
  str += "\n";
}

console.log(str);
