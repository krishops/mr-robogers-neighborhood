// At this point I feel like I know what I need to do but I can't figure out the functions to be able to do it. I need the inputted value to be parsed into each number leading up to the inputted value. The best way I can figure to do this is to push it into an array. But then I need my integers to be strings so that I can target a specific digit in the number instead of the number as a whole. However, I can get .toString to take the array as a whole and turn it into a string but I want each individual element of the array to be a string, but I'm not sure what function I need to do that. After I can turn the numbers into individual strings, I feel like this problem should be pretty simple to accomplish. What I have right now is pretty much a mess, because I keep trying different things and now TDD is pretty much shot. 



// function checkNumber(element) {
//   if (element === 1 || element === 2 || element === 3) {
//     return true;
//   } 
//     else {
//       return false;
//     }
//   }

//creates an array
// let array = []


// function createArray(userInput) {
//   let array = [];
//   for (i = 0; i <= userInput; i += 1) {
//     array.push(i.toString())
//     console.log(i, array);  
// }
//   return array
// }
// Can't figure out how to get this array created from the user to be applied to the next loop, so I'm just going to test my code for replacing numbers with words and make sure i get that right.

let array = ["1", "2", "5", "13", "15", "24", "31"];
  for (i = 0; i <= array.length; i += 1) {
      if (array[i].includes("1")) {
        array[i] = "Beep!";
      }
      console.log(array)
      
    }
  
  


//AAAAAARRRRGHGHGHGH



//UI Logic

// $(document).ready(function () {
//   $("form#roboger").submit(function (event) {
//     event.preventDefault();
//     const userInput = parseInt($("#input").val());
//     // console.log(number)
//     let array = createArray(userInput)
    
//     $("#result").text(stringToShow(array));
    
//   });
// });



      //I DON'T NEED TO STRING THE NUMBERS!!! Unitl I doooooo
//       array = array.String(i).split(" ");

//       console.log(array)
// 
