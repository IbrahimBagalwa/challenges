// Write a javascript program to check a credit card number is valid.
// eg: 1234 5678 9876 5432
function checkCreditCard(creditCard) {
  return /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(creditCard)
    ? "Valid Credit Card"
    : "Invalid Credit Card";
}
console.log(checkCreditCard("1234 56788 9876 5432"));
