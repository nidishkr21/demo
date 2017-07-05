//LIST 2.


var item=[]; //ARRAY OF THE ITEMS TO BE PURCHASED
var item_e=[]; //ARRAY THAT WILL BE USED AFTER REMOVING BLANK SPACES AND SWITCHING TO LOWER CASE
var price_split=[]; //ARRAY OF STRINGS AFTER SPLITTING PRICES FROM THE ITEM STRING
var price=[]; //ARRAY OF ALL THE PRICES IN CHARACTER TYPE
var price_float=[]; //ARRAY OF ALL THE PRICES IN NUMBER FORMAT
var display=[]; //ARRAY OF ALL THE FINAL OUTPUT 
var sum_tax; //VARIABLE TO STORE THE SUM OF INDIVIDUAL TAXES
var total_sale; //VARIABLE TO STORE TOTAL SALES PRICE

item[0]="1 imported box of chocolates at 10.00"; //ITEM 1
item[1]="1 imported bottle of perfume at 47.50"; //ITEM 2
//item[2]="1 chocolate bar at 0.85";
//item[3]="1 box of imported chocolates at 11.25";
var exempt_goods=["book","chocolate","pills"]; //ARRAY OF THE EXEMPTED GOODS

var length=item.length; //VARIABLE TO STORE LENGTH OF ITEM ARRAY
var length_egoods=exempt_goods.length; //VARIABLE TO STORE LENGTH OF EXEMPT GOODS ARRAY
var total_sales_tax_percentage= []; //ARRAY TO STORE TOTAL SALES TAX PERCENTAGE FOR EACH ITEM
var individual_sales_tax=[]; //ARRAY TO STORE INDIVIDUAL SALES TAX FOR EACH ITEM
var price_after_tax=[]; //ARRAY TO STORE FINAL PRICES FOR ALL ITEMS AFTER TAXATION


for(var i=0;i<length;i++) //LOOPS TO INITIALIZE THE total sales tax percentage, individual sales tax for each item and final prices array respectively. 
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

for(var i=0;i<length;i++) //LOOP TO CONVERT ALL THE LETTERS IN THE ITEM ARRAY TO lower case FOR EVALUATION
{
  item_e[i]=item[i].toLowerCase();
}

for(var i=0;i<length;i++) //LOOP TO REMOVE BLANK SPACES FOR EVALUATION
{
  item_e[i]=item[i].replace(/[^a-z|0-9|^.]/g,"")
}

for(var i=0;i<length;i++) //LOOP TO INCREMENT THE TOTAL TAX PERCENTAGE OF ITEMS WITH the work "IMPORTED" by 5%
{ var k=item_e[i].search("imported")
  if(k!=-1)
  {
    total_sales_tax_percentage[i] +=5;
  }
}

for(var i=0;i<length;i++) //LOOP TO INCREMENT THE TOTAL TAX PERCENTAGE OF ITEMS that are not exempt by 10%
{
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

for(var i=0;i<length;i++) //LOOP TO SPLIT THE PRICE FROM THE STRING
{ 
  price_split[i]=item_e[i].split('at');
}

for(var i=0;i<length;i++) //LOOP TO PUT THE SPLIT PRICE IN ANOTHER ARRAY
{ var z=price_split[i].length
  price[i]=price_split[i][z-1];
}

for(var i=0;i<length;i++) //LOOP TO CONVERT THE PRICES TO A NUMBER FOR CALCULATIONS
{ 
  price_float[i]=Number(price[i]);
}

for(var i=0;i<length;i++) //CALCULATION OF INDIVIDUAL SALES TAX
{
  individual_sales_tax[i]=price_float[i]*total_sales_tax_percentage[i]/100;
}

for(var i=0;i<length;i++) //CALCULATION OF PRICES AFTER TAXATION
{
  price_after_tax[i]=price_float[i]+individual_sales_tax[i];
}

for(var i=0;i<length;i++) //ROUNDING OFF
{
 
  price_after_tax[i]=Math.round(price_after_tax[i]*100)/100;

}

total_sale=price_after_tax.reduce(function(previousVal,CurrentVal) //CALCULATION OF THE TOTAL SALE.
{
  return previousVal+CurrentVal;
})


sum_tax=individual_sales_tax.reduce(function(previousVal,CurrentVal) //CALCULATION OF THE TOTAL TAX 
{
  return previousVal+CurrentVal;
})
sum_tax=Math.round(sum_tax*100)/100;

for(var i=0;i<length;i++) //SPLITTING THE ITEM NAME FROM THE INITIAL STRING FOR FINAL DISPLAY
{
  display[i]=item[i].split(" ");
}

for(var i=0;i<length;i++) //REMOVING THE parts "at <price>" FOR FINAL DISPLAY
{ var n=display[i].length;
  for(var j=n-2;j<n;j++)
  {
    display[i][j]="";
  }
}

for(var i=0;i<length;i++) //JOINING THE REMAINING SPLIT PARTS FOR FINAL DISPLAY
{
  display[i]=display[i].join(" ");
}

for(var i=0;i<length;i++) //FINAL DISPLAY
{
  console.log(display[i],":",price_after_tax[i]);
 
}

console.log("Sales Tax:  ", sum_tax);
console.log("Total:  ", total_sale);
