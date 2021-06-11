
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

Test: "It should return true if an array contains 1"
Code: createArray(0)
Expect: false
Code: createArray(1)
Expect true

Test: "It should replace 1 with "Beep!" within the array"
Code: replaceBeep(array)
Expect: [0, "Beep!", 2, 3, 4, 5]

Describe: replaceBoop(array)

Test: "It should return true if an array contains 2"
Code: replaceBoop(array)
Expect: true

Test: "It should replace 2 with "Boop!" within the array"
Code: replaceBeep(array)
Expect: [0, 1, "Boop!", 3, 4, 5]

Descrbe: replaceNeighbor(array)

Test: "It should return true if an array contains 3"
Code: replaceNeighbor(array)
Expect: true

Test: "It should replace 3 with "Won't you be my neighbor?" within the array"
Code: replaceBeep(array)
Expect: [0, 1, 2, "Won't you be my neighbor?", 4, 5]

Test: "It should replace 1 with "Beep!"

Test: "It should replace 2 with "Boop!"

Test: "It should replace 3 with "Won't you be my neighbor?"

