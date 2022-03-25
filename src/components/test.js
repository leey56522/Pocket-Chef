// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
const camelize = function(str) {
    const splitStr = str.split('-');
    const ans = splitStr.map((str, index) => {
        return index === 0 ? str : str.charAt(0).toUpperCase() + str.slice(1);
    })
    return ans.join('');
}

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
const filterRange = function(arr, a, b) {
    return arr.filter(ele => ele >= a && ele <= b);
}

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
const filterRangeInPlace = function(arr, a, b) {
    return arr.filter(ele => {
        let big = a > b ? a : b;
        let small = a < b ? a : b;

        return ele <= big && ele >= small;
    })
}

//Sort in decreasing order
const reverseSort = function(arr) {
    return arr.sort((a, b) => b - a);
}

// Copy and sort
const copySort = function(arr) {
    return [...arr].sort((a, b) => a-b )
}

// Create an extendable calculator
function Calculator() {
    this.calculator = function(str) {
        const splitStr = str.split(' ');
        if(splitStr[1] === '+') {
            return Number(splitStr[0]) + Number(splitStr[2])
        } else if(splitStr[1] === '-') {
            return Number(splitStr[0]) - Number(splitStr[2])
        }
    }
}

let calc = new Calculator; 
console.log(calc.calculator('1 + 2'));