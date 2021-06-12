
Function to return array of all numbers to the user, sum++ foreach
Loop to look for 1s 2s or 3s and replace (individual functions for each?)


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
Expect ["1", "2", "3", "4", "5"]



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



