//concatination of two srtings //
// let str1="Md Israr";
// let str2="Ahemed";
// let result = str1.concat(" ",str2);  //using of concat() method iske 
//parameter me el spaerator denge "" or dusra string variable
// console.log(result)
// <------------------------------------------------------------------>
//Anither approach//
// let str1="Md Israr";
// let str2="Ahemed";
// console.log(str1+ " "+ str2)
//<--------------------------------------------------------------------->
//substring method isme ye string ke characer number se
// slect karta hai or jahan tak print karana hai jaise 
// hum ko "Hello World" me sirf world print karana hai
// to hum  substring(6,11) yahan jo 6 hai wo H ki position hai
// jo 0 se start hoti hai oe 11 ko hai wo last element hai or 
//jo first element hota hai wo including hota hai 
//or last element exluding hota hai to ekprogram dekhte hain 
//<--------------------------------------------
// let string= "Hello JavaScript";             |
// let result = string.substring(10,16);       |
// console.log(result)                         |
//<--------------------------------------------|
//remark is me jo "S" hai wo 10 index pe hai or "t" wo 15 index 
//pe hai to last wala index humara excluding hota hai to hum ek 
//index badha ke likte hain to (n-1) 15 include ho jayega or huamra 
//= "Script" jo required output tha wo Print ho jayega 