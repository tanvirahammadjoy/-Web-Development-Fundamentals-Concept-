// Masterclass on JavaScript Operators
// JavaScript operators are symbols used to perform operations on operands (values or variables). They are crucial in controlling logic, performing arithmetic, and manipulating data. Let's break down the different types of operators in JavaScript:

// 1. Arithmetic Operators
// These operators are used to perform arithmetic calculations like addition, subtraction, multiplication, etc.

// Operator	Description	Example
// +	Addition	5 + 3 = 8
// -	Subtraction	5 - 3 = 2
// *	Multiplication	5 * 3 = 15
// /	Division	6 / 2 = 3
// %	Modulus (Remainder)	5 % 2 = 1
// ++	Increment (add 1)	let x = 5; x++ = 6
// --	Decrement (subtract 1)	let x = 5; x-- = 4

// Note:
// x++ is post-increment, and it increments x after its current value is used.
// ++x is pre-increment, and it increments x before using it.

// 2. Assignment Operators
// These operators are used to assign values to variables.
// Operator	Description	Example
// =	Simple assignment	x = 10
// +=	Add and assign	x += 5 (x = x + 5)
// -=	Subtract and assign	x -= 5 (x = x - 5)
// *=	Multiply and assign	x *= 5 (x = x * 5)
// /=	Divide and assign	x /= 5 (x = x / 5)
// %=	Modulus and assign	x %= 5 (x = x % 5)

// 3. Comparison Operators
// These operators compare two values and return a boolean (true or false).
// Operator	Description	Example
// ==	Equal to	5 == '5' → true
// !=	Not equal to	5 != '5' → false
// ===	Strict equal (both value and type)	5 === '5' → false
// !==	Strict not equal (both value and type)	5 !== '5' → true
// >	Greater than	6 > 5 → true
// <	Less than	5 < 6 → true
// >=	Greater than or equal to	6 >= 6 → true
// <=	Less than or equal to	5 <= 6 → true
// Important: The == and != operators do type coercion (they convert the operands to the same type before comparison), whereas === and !== check both value and type.

// 4. Logical Operators
// These are used to combine multiple conditions.

// Operator	Description	Example
// &&	Logical AND (both conditions must be true)	true && false → false
// `		`
// !	Logical NOT (negates the condition)	!true → false

// 5. Bitwise Operators
// These operators work on binary digits (bits) of numbers.

// Operator	Description	Example (Binary)
// &	Bitwise AND	5 & 1 → 1
// `	`	Bitwise OR
// ^	Bitwise XOR	5 ^ 1 → 4
// ~	Bitwise NOT (inverts bits)	~5 → -6
// <<	Left shift	5 << 1 → 10
// >>	Right shift	5 >> 1 → 2
// >>>	Zero-fill right shift	5 >>> 1 → 2

// Example:
// 5 = 0101 (binary)
// 1 = 0001 (binary)
// console.log(5 & 1); // Output: 1 (binary: 0001)

// 6. Ternary Operator
// This is a shorthand for if-else statements. The syntax is:

// condition ? expr1 : expr2;

// Example:
// let age = 18;
// let canVote = (age >= 18) ? "Yes" : "No";
// console.log(canVote); // Output: Yes

// 7. Type Operators
// These operators help to check or convert data types.

// Operator	Description	Example
// typeof	Returns the type of a variable	typeof 42 → "number"
// instanceof	Checks if an object is an instance of a class	[] instanceof Array → true
// new	Creates an instance of an object	new Date()
// delete	Deletes an object’s property	delete obj.key
// void	Evaluates an expression without returning a value	void(0)
// 8. Spread Operator
// The ... operator is used to expand an iterable (like an array or string) into individual elements.

// Example (Array Expansion):

// let arr = [1, 2, 3];
// let newArr = [...arr, 4, 5];
// console.log(newArr); // Output: [1, 2, 3, 4, 5]

// Example (Object Expansion):

// let obj = {a: 1, b: 2};
// let newObj = {...obj, c: 3};
// console.log(newObj); // Output: {a: 1, b: 2, c: 3}

// 9. Optional Chaining Operator (?.)
// This is used to safely access deeply nested properties of an object without worrying about null or undefined values.

// Example:
// let person = { name: "Alice", address: { city: "Wonderland" } };
// console.log(person?.address?.city); // Output: Wonderland
// console.log(person?.phone?.number); // Output: undefined (no error)

// 10. Nullish Coalescing Operator (??)
// This operator returns the right-hand operand when the left-hand operand is null or undefined.

// Example:
// let user;
// let name = user ?? "Guest";
// console.log(name); // Output: Guest

// Summary:
// JavaScript operators offer great flexibility and control in performing various tasks such as arithmetic calculations, comparisons, logical operations, and more. Knowing how and when to use these operators helps in writing more concise and efficient code.

// Arithmetic operators help perform calculations.
// Assignment operators simplify operations and assignments.
// Comparison operators help in decision-making through conditions.
// Logical operators combine conditions effectively.
// Bitwise operators allow manipulation of numbers at the bit level.
// Type operators provide ways to check and manipulate variable types.
// Understanding these operators will significantly enhance your ability to solve problems and write better JavaScript code.
