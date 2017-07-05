//Concatenate 2 arrays without using inbuilt functions.

var array_1=[1,2,3,4,5,9,1,293,494,5923];
var array_2=[6,7,8,9,10,91,9123,9123,9123];
var concat_array=[];
var array_1_length=array_1.length;

for(i=0;i<array_1_length;i++){
  concat_array[i]=array_1[i];
  }

var array_2_length=array_2.length;

for(j=array_1_length; j<array_1_length+array_2_length;j++){
concat_array[j]=array_2[j-array_1_length]
  }

console.log(concat_array);