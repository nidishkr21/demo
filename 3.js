//Find the frequency of occurence of each letter in a string.

var random_string="asdhcnmeryuadsfjnbzxcv";

var frequency_map={};
var string_length=random_string.length;
for (var i=0;i<string_length;i++){
  var character=random_string.charAt(i);
  if (frequency_map[character]){
    frequency_map[character]++;
  } else{
    frequency_map[character]=1;
  }
}

console.log(frequency_map);
