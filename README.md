# Mr. Roboger's Neighborhood

#### A JavaScript interface for demonstrating the use of `for` loops.

#### By Kristen Hopper

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQUery_

## Description

This program demonstrates the use of `for` loops by taking a number inputted by a user and creating a list of numbers 0 through the entered number and replacing some of the numbers with pre-determined phrases.

## Setup/Installation Requirements

1. Create an empty directory with no local repository. 
2. Within the new directory, run `git clone https://github.com/krishops/mr-robogers-neighborhood.git` in the terminal to clone the project files to a local repository.
3. Within the top level of the cloned directory, open language-selector/index.html to run the program in the browser.

## Known Bugs

* The results of the submitted form only appear in the console. They are not transferred to the DOM for access by the user.

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) Kristen Hopper

## Contact Information

hopperdavis@gmail.com



Describe: createArray()

Test: "It should return an array containing 0 if 0 is inputted"
Code: createArray(0);
Expect: [0]

Test: "It should return an array containing 0 and 1, if 1 is inputted"
Code: createArray(1);
Expect [0, 1]

Test: "It should return all numbers 0-5 when 5 is inputted"
Code: createArray(5)
Expect 0, 1, 2, 3, 4, 5

Test: "It should return an array of 0 to inputted number for any number inputted"
Code: createArray(10);
Expect: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

Test: "It should convert numbers in the array into individual strings"
Code: createArray(5)
Expect ["0", "1", "2", "3", "4", "5"]



Describe: resultToShow()

Test: "It should convert strings containing a 1 into "Beep!"
Expect: ["Beep!", "2", "5", "Beep!", "Beep!", "24" "Beep!"]

Test: "It should convert strings containing 1 into "Beep!", 2 into "Boop!", and 3 into "Won't you be my Neigbor?"
Expect: ["Beep!", "Boop!", "5", "Won't you be my neighbor?", "Beep!", "Boop!" "Won't you be my neigbor?"]



HTML Tests
Test: "Number submitted in text field will return an integer"
Input: "10"
Expect: 10

Test: "Number submitted in text field will be transferred into function createArray()"
Input: "5"
Expect: console.log = ["1", "2", "3", "4", "5"]

Test: "Number submitted in text field will return array containing numbers and messages"
Input "5"
Expect: console.log = ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5"]

