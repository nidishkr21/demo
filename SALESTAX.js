var item=[];
var item_e=[];
var price_split=[];
var price=[];
var price_float=[];
var display=[];
var sum_tax;
var total_sale;
var final_display=[];

item[0]="1 imported box of chocolates at 10.00";
item[1]="1 imported bottle of perfume at 47.50";
//item[2]="1 chocolate bar at 0.85";
//item[3]="1 box of imported chocolates at 11.25";
var exempt_goods=["book","chocolate","pills"];

var length=item.length;
var length_egoods=exempt_goods.length;
var total_sales_tax_percentage= [];
var individual_sales_tax=[];
var price_after_tax=[];
for(var i=0;i<length;i++)
{
  total_sales_tax_percentage.push(0);
}

for(var i=0;i<length;i++)
{
  individual_sales_tax.push(0);
}

for(var i=0;i<length;i++)
{
  price_after_tax.push(0);
}

for(var i=0;i<length;i++){
  item_e[i]=item[i].toLowerCase();
}

for(var i=0;i<length;i++)
{
  item_e[i]=item[i].replace(/[^a-z|0-9|^.]/g,"")
}

for(var i=0;i<length;i++)
{ var k=item_e[i].search("imported")
  if(k!=-1)
  {
    total_sales_tax_percentage[i] +=5;
  }
}

for(var i=0;i<length;i++){
  var e=0;
  for(var j=0;j<length_egoods;j++){
    var k=item_e[i].search(exempt_goods[j]);
    if(k!=-1)
    { 
      e++;
    }

  }
  if(e==0)
  {
    total_sales_tax_percentage[i] +=10;
  }
}

for(var i=0;i<length;i++)
{ 
  price_split[i]=item_e[i].split('at');
}

for(var i=0;i<length;i++)
{ var z=price_split[i].length
  price[i]=price_split[i][z-1];
}

for(var i=0;i<length;i++)
{ 
  price_float[i]=Number(price[i]);
}

for(var i=0;i<length;i++)
{
  individual_sales_tax[i]=price_float[i]*total_sales_tax_percentage[i]/100;
}

for(var i=0;i<length;i++)
{
  price_after_tax[i]=price_float[i]+individual_sales_tax[i];
}

for(var i=0;i<length;i++)
{
 
  price_after_tax[i]=Math.round(price_after_tax[i]*100)/100;

}

total_sale=price_after_tax.reduce(function(previousVal,CurrentVal)
{
  return previousVal+CurrentVal;
})


sum_tax=individual_sales_tax.reduce(function(previousVal,CurrentVal)
{
  return previousVal+CurrentVal;
})
sum_tax=Math.round(sum_tax*100)/100;

for(var i=0;i<length;i++)
{
  display[i]=item[i].split(" ");
}

for(var i=0;i<length;i++)
{ var n=display[i].length;
  for(var j=n-2;j<n;j++)
  {
    display[i][j]="";
  }
}

for(var i=0;i<length;i++)
{
  display[i]=display[i].join(" ");
}

for(var i=0;i<length;i++)
{
  console.log(display[i],":",price_after_tax[i]);
 
}

console.log("Sales Tax:  ", sum_tax);
console.log("Total:  ", total_sale);
