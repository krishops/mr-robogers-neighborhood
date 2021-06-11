
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


function createArray(number) {
  let array = [];
  for (i = 0; i <= number; i +=1 ) {
    array.push(i); 
    console.log(i, array);
    // array.toString();
    if (array[i] === 1 ) {
      array[i] = "Beep!";
    }
    if (array[i] === 2 ) {
      array[i] = "Boop!";
    }
    if (array[i] === 3 ) {
      array[i] = "Won't you be my neighbor?";
    }
  }

//AAAAAARRRRGHGHGHGH

}

//UI Logic

$(document).ready(function()  {
  $("form#roboger").submit(function (event) {
    event.preventDefault();
    const number = parseInt($("#input").val());
    console.log(number)
  });
});



      //I DON'T NEED TO STRING THE NUMBERS!!! Unitl I doooooo
//       array = array.String(i).split(" ");
      
//       console.log(array)
// 
