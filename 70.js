// Given a string S, print 'yes' if it has a vowel in it else print 'no'.

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  let a = userInput[0].split('');
//   console.log(a);
  for(let i=0;i<a.length;i++)
  {
  if(a[i]=="a" || a[i]=="e" ||a[i]=="i" ||a[i]=="o" ||a[i]=="u" )
  {
      console.log("yes")
      break;}
      else{
          console.log("no")
          break ;
      }
  }
  
  

  //end-here
});