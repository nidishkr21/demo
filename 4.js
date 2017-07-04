var a=[1,2,3,4,5,9,1,293,494,5923];
var b=[6,7,8,9,10,91,9123,9123,9123];
var c=[];
for(i=0;i<a.length;i++)
{
	c[i]=a[i];
}
for(j=a.length; j<a.length+b.length;j++)
{
	c[j]=b[j-a.length]
}
console.log(c);