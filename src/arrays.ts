/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    //WORKING
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [...numbers, ...numbers];
    }
    let newNumbers: number[] = [numbers[0], numbers[numbers.length - 1]];
    return newNumbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    //WORKING
    let tripled: number[] = numbers.map((num: number): number => num * 3);
    return tripled;
}
//helper function
export function canConvert(num: number): boolean {
    if (isNaN(num)) {
        return false;
    }
    return true;
}
/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    //WORKING
    let ints: number[] = numbers.map((num: string): number =>
        canConvert(parseInt(num)) ? parseInt(num) : 0,
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //WORKING
    const newAmounts: string[] = amounts.map((amount: string) =>
        amount.startsWith("$") ? amount.replace("$", "") : amount,
    );
    const intAmounts = newAmounts.map((amount: string): number =>
        canConvert(parseInt(amount)) ? parseInt(amount) : 0,
    );
    return intAmounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //WORKING
    let noQuestions: string[] = messages.filter(
        (message: string) => !message.endsWith("?"),
    );
    let exclaim: string[] = noQuestions.map((message: string) =>
        message.endsWith("!") ? message.toUpperCase() : message,
    );
    return exclaim;
};
//helper function
export function isShort(word: string): boolean {
    if (word.length < 4) {
        return true;
    }
    return false;
}
/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    //WORKING
    let sum = words.reduce(
        (currentTotal: number, word: string) =>
            isShort(word) ? currentTotal + 1 : currentTotal,
        0,
    );
    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    //WORKING
    const isRGB = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
    return isRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    //find sum
    if (addends.length === 0) {
        return "0=0";
    }
    let sum = addends.reduce(
        (addend: number, total: number) => total + addend,
        0,
    );
    let newStr: string = addends.join("+");
    return sum.toString() + "=" + newStr;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    //WORKING
    let firstNegative: number = values.findIndex((value: number) => value < 0);
    let sum: number = values
        .slice(0, firstNegative === -1 ? values.length : firstNegative)
        .reduce((total: number, value: number) => total + value, 0);
    let newValues = [...values];
    if (firstNegative === -1) {
        newValues.splice(newValues.length, 0, sum);
    } else {
        newValues.splice(firstNegative + 1, 0, sum);
    }
    return newValues;
}
