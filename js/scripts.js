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


function createArray(userInput) {
  let array = [];
  for (i = 0; i <= userInput; i += 1) {
    array.push(i.toString())
    console.log(i, array);  
  }
  return array
}

// let array = ["1", "2", "3", "4", "15", "24", "31"];

// function resultToShow(array) {
//   for (i = 0; i <= array.length; i += 1) { 
//     if (array[i].includes("3")) { 
//       array[i] = "Won't you be my neighbor?";
//     }
//     else if (array[i].includes("2")) {
//       array[i] = "Boop!";
//     }  
//     else if (array[i].includes("1")) {
//       array[i] = "Beep!";
//       }
//       console.log(array)
      
//   }
//   return array
// }





//UI Logic

$(document).ready(function () {
  $("form#roboger").submit(function (event) {
    event.preventDefault();
    const userInput = parseInt($("#input").val());
    let array = createArray(userInput)
    
    $("#output").text(resultToShow(array));

  });
});
