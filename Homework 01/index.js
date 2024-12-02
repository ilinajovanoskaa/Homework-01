let phonePrice = 119.95; // Price of one phone
let taxRate = 0.05; // Tax price 5%
let numberOfPhones = 30; // Total number of phones

// Calculate the total price before tax
let totalPriceBeforeTax = phonePrice * numberOfPhones;

// Calculate the total tax
let totalTax = totalPriceBeforeTax * taxRate;

// Calculate the total price including tax
let totalPriceWithTax = totalPriceBeforeTax + totalTax;

// Output the results
console.log("Total price before tax: $" + totalPriceBeforeTax.toFixed(2)); //toFixed(2) is  method that formats a number to have 2 decimal places.
console.log("Total tax: $" + totalTax.toFixed(2));
console.log("Total price with tax: $" + totalPriceWithTax.toFixed(2));
