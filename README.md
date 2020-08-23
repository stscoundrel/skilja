# Skilja

Array chunker for JavaScript. Simple function with tests.

JavaScript standard library has for long lacked a method to chunk array into smaller arrays. There are various libraries and approaches to fix this. Frankly, couldn't be bothered to comb through all of them to see which one is valid, or cherrypick part of Lodash for one function. I've found myself copypasting same util function from project to project, so: "there are many like it, but this one is mine".

### Install

`yarn add skilja`

### Usage


```javascript
const { chunkArray } = require('skilja');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const chunksA = chunkArray(array, 2);
const chunksB = chunkArray(array, 5);
const chunksB = chunkArray(array, 3);

console.log(chunksA) // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]
console.log(chunksB) // [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ] ]
console.log(chunksC) // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]

```

#### What's in the name?

"Skilja" is Old Norse verb for "to part, divide, separate". It has similar descendants in modern north germanic languages.
