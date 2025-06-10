function validateCard(cardNumber) {
    const length = cardNumber.length;
    if (length < 15 || length > 16) {
        return "Invalid length";
    }

    if (cardNumber[0] == 4 && length == 16) {
        return "Visa Card";
    } 
   else if (cardNumber[0] == 5 && length == 16) {
        return "MasterCard";
    } 
   else if (cardNumber[0] == 6 && length == 16) {
        return "Discover Card";
    } 
    else if (cardNumber[0] == 3 && length == 13 && cardNumber[1] == 7) {
        return "American Express Card";
    }
    else {
        return "Unknown Card Type";
    }
}

function applyLuhnAlgorithm(cardNumber) {
    let sum = 0;
    let doubleDigit = false;

    for (let num = cardNumber.length - 1; num >= 0; num--) {
        let digit = parseInt(cardNumber[num], 10);

        if (doubleDigit) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        doubleDigit = !doubleDigit;
    }

    return sum % 10 === 0 ? "Valid" : "Invalid";
}


const sampleCard = [4, 5, 3, 9, 1, 4, 8, 8, 0, 3, 4, 3, 6, 4, 6, 7];
console.log(validateCard(sampleCard));
console.log(applyLuhnAlgorithm(sampleCard));