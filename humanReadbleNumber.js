function humanReadbleNumber(number) {
    const words = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    function twoDigitsToWords(num) {
        if (num <= 20) {
            return words[num];
        } else {
            const tens = Math.floor(num / 10) * 10;
            const ones = num % 10;
            return words[tens] + (ones !== 0 ? " " + words[ones] : "");
        }
    }

    function threeDigitsToWords(num) {
        const hundreds = Math.floor(num / 100);
        const remainder = num % 100;

        if (remainder === 0) {
            return words[hundreds] + " hundred";
        }
        else {
            return words[hundreds] + " hundred " + twoDigitsToWords(remainder);
        }
    }
    if (number < 100) {
        return twoDigitsToWords(number);
    } else {
        return threeDigitsToWords(number);
    }
}
console.log(humanReadbleNumber(400))
