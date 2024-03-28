#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance: number = 5000;
let mypin: number = 8;
//

let pinans: any= await inquirer.prompt(
[
{
name: "pin1",
message: "enter pin for example mypin 8",
type: "number"
}
]
);
//console.log(pinans.pin1);

if(pinans.pin1===mypin){
    console.log("ok123");


let selectionAns: any= await inquirer.prompt(
[
{
name: "option",
message: " select transaction",
type: "list",
choices: ["withdraw","balance"]
}
]
);
// if(pinans.option===option){
//     console.log("ok123");
if(selectionAns.option=="withdraw")
{
   console.log("withdraw123"); 
//now select amount
let selectionAmount: any= await inquirer.prompt(
[
{
name: "amount",
message: " select required amount",
type: "list",
choices: ["500","1000","2000"]
}
]
);
//
 console.log(`trasaction processed   ${selectionAmount.amount} `); 
 //console.log("amoutselected"); 
//console.log(selectionAmount.amount); 
if(selectionAmount.amount>mybalance){
 console.log(`amout selected  ${selectionAmount.amount} is great than yr balance ${mybalance}`);    
}else {
let remainingAmount: number=mybalance-selectionAmount.amount

 console.log(`trasaction processed :remainingAmount  ${remainingAmount} `); 
 }

}
//balance start
if(selectionAns.option=="balance")
{
 console.log("balance"); 
  console.log(mybalance); 
//now select amount
}



}else{
    console.log("\n pin wrong");
}
