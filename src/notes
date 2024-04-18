// const fizzBuzz = (n: number) => {
//   // let result = '';
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('Fizz Buzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// };
// fizzBuzz(100);
// const checkPalindrome = (str: string) => {
//   console.log(str.split(''));
//   if (str == str.split('').reverse().join('')) {
//     console.log('palindrome');
//   } else {
//     console.log('not palindrome');
//   }
// };
// checkPalindrome('madamm');

// const reverseString = (str: string) => {
//   console.log(str.split('').reverse().join(''));
// };
// reverseString('hello');
// const fibonacci = (n: number) => {
//   const sequence = [0, 1];

//   for (let i = 2; i < n; i++) {
//     sequence[i] = sequence[i - 1] + sequence[i - 2];
//   }

//   console.log(sequence);
// };

// fibonacci(10);
// const getChange = (amountDue: number, transactionTotal: number) => {
//     // Calculate the change needed by subtracting total from tendered and convert it to pence
//     let change = Math.round((transactionTotal - amountDue) * 100);

//     // Define an array of all possible denominations in pence
//     const tender = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

//     // Initialize an empty array to hold the result
//     const result = [];

//     // Loop over each denomination in the tender array
//     for (let i = 0; i < tender.length; i++) {
//       // Store the current denomination in a variable
//       const denomination = tender[i];

//       // While the change needed is greater than or equal to the current denomination
//       while (change >= denomination) {
//         // Subtract the value of the current denomination from the change
//         change -= denomination;

//         // Add the current denomination to the result array (converted back to pounds)
//         result.push(denomination / 100);
//       }
//     }

//     // Return the result array
//     return result;
//   };

//     console.log(getChange(1.59, 2.0)); // [0.2, 0.2, 0.01]

// @layer base {
//   :root {
//      --background: 0 0% 100%;
//       --foreground: 222.2 84% 4.9%;

//       --card: 0 0% 100%;
//       --card-foreground: 222.2 84% 4.9%;

//       --popover: 0 0% 100%;
//       --popover-foreground: 222.2 84% 4.9%;

//       --primary: 222.2 47.4% 11.2%;
//       --primary-foreground: 210 40% 98%;

//       --secondary: 210 40% 96.1%;
//       --secondary-foreground: 222.2 47.4% 11.2%;

//       --muted: 210 40% 96.1%;
//       --muted-foreground: 215.4 16.3% 46.9%;

//       --accent: 210 40% 96.1%;
//       --accent-foreground: 222.2 47.4% 11.2%;

//       --destructive: 0 84.2% 60.2%;
//       --destructive-foreground: 210 40% 98%;

//       --border: 214.3 31.8% 91.4%;
//       --input: 214.3 31.8% 91.4%;
//       --ring: 222.2 84% 4.9%;
