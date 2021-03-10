# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @j-pilon/lotide`

**Require it:**

`const _ = require('@j-pilon/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `middle(array)`: returns the middle element or elements, if the array is an even number
* `tail(array)`: returns all the elements of an array except the first element
* `head(array)`: returns just the first elements of an array
* `assertArraysEqual(array1, array2)`: compares two arrays and returns a pass or a fail
* `assertEqual(actual, expected)`: compares if actual parameter results to expected and returns pass or fail
* `assertObjectsEqual(object1, object2)`: compares two objects and returns a pass or a fail
* `countLetter(string)`: returns the amount of each letter of that string, besides the spaces
* `countOnly(allItems, itemsToCount)`: returns the number of times the object's keys, itemsToCount, appeared in allItems
* `eqArrays(array1, array2)`: compares two arrays and returns true or false
* `eqObjects(object1, object2)`: compares objects and returns true or false
* `findKey(obj, callback)`: returns the value back based on the callback
*  `findKeyByValue(value, obj)`: returns the key of the parameter value 
*  `letterPositions(sentence)`: returns the index or indices of a letter
*  `map(array, callback)`: preforms the callback on each element and returns a new array
*  `takeUntil(array, callback)`: pushs the array elements into a new array until the callback is returns trues
*  `without(array, itemsToRemove)` : removes the itemsToRemove from array