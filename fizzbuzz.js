#!/usr/bin/env node

"use strict"

var arg = process.argv[2]

if (!arg) {
    console.error('Missing argument!')
    process.exit(1)
}

if (isNaN(arg)) {
    console.error('Input has to be integer!')
    process.exit(1)
}

if (arg < 1 || arg > 100) {
    console.error('Input has to be between 1 and 100!')
    process.exit(1)
}

function fizzbuzz(n) {
    if ((arg % 3 == 0) && (arg % 5 == 0)) {
        return "FizzBuzz"
    } else if (arg % 3 == 0) {
        return "Fizz"
    } else if (arg % 5 == 0) {
        return "Buzz"
    } else {
        return n
    }
}

console.log('%s', fizzbuzz(arg))