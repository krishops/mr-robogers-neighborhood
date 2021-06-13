
function createArray(userInput) {
  let array = [];
  for (i = 0; i <= userInput; i += 1) {
    array.push(i.toString())
  }
  return array
}

function resultToShow(array) {
  for (i = 0; i <= array.length; i += 1) { 
    if (array[i].includes("3")) { 
      array[i] = "Won't you be my neighbor?";
    }
    else if (array[i].includes("2")) {
      array[i] = "Boop!";
    }  
    else if (array[i].includes("1")) {
      array[i] = "Beep!";
    }
      console.log(array)
  }
  return array
}

$(document).ready(function () {
  $("form#roboger").submit(function (event) {
    event.preventDefault();
    const userInput = parseInt($("#input").val());
    let array = createArray(userInput)
    
    $("#output").html(resultToShow(array));
  });
});
