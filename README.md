<h2 className="text-accent">SPORTS-EVENT </h2>

<h4>Live-Link</h4>

<h5>Click the live link:</h5>https://65242e56b00b0814c8025447--melodious-froyo-d97115.netlify.app/

<ul>
<li>Comprehensive Event Listings: Your website features an extensive and up-to-date catalog of sports events from various categories, including team sports, individual sports, and niche sporting activities.</li>
<li>User-Friendly Interface: The website boasts an intuitive and user-friendly interface, making it easy for visitors to search, filter, and find information about their favorite sports events, including dates, venues, and ticketing details.</li>
<li>Interactive Event Calendar: A dynamic event calendar on your website allows users to plan their sports attendance well in advance. They can mark their calendars, set reminders, and receive notifications for upcoming events.</li>
<li>Multimedia Content: Your website offers a rich multimedia experience with photos, videos, and live streaming options, enhancing the user's engagement and excitement for the sports events they are interested in.</li>
<li>Community and Social Integration: Encourage interaction and discussion among sports enthusiasts by integrating social features, such as forums, comment sections, and sharing options, fostering a sense of community around the shared love for sports events.</li>
</ul>


1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer: B:ReferenceError: greetign is not defined

Explanation: ReferenceError: greetign is undefined. Becouse here variable declered as  greeting but it's being assigned as greetign

2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer:D:3

Explanation: In JavaScript, when the + operator is used with a number and a string, it performs type coercion by converting the number to a string and then concatenating them. So, when you call sum(1, "2"), it converts 1 to the string "1", and then concatenates it with "2", resulting in "12". Finally, JavaScript converts the concatenated string back to a number when returning it, so the result is the number 3.


3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer: A :  ['🍕', '🍫', '🥑', '🍔']
Explanation: Modifying the value of info.favoriteFood to "🍝" does not alter the original food array. The food array retains its initial elements, resulting in the output of ['🍕', '🍫', '🥑', '🍔'] when you log food.

4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer:B Hi there,uundefined
Explanation: When you call the sayHi function without providing an argument, the name parameter inside the function remains undefined. As a result, the function returns "Hi there, undefined" where undefined represents the value of the name parameter that was not provided when calling the function.

5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer:B :2

Explanation: The forEach loop iterates over the nums array and increments the count variable when a truthy value is encountered. In JavaScript, all numbers except 0 are considered truthy. So, it increments count for each non-zero number in the array, which are 1, 2, and 3. Therefore, count becomes 2, and that's the value logged to the console.
