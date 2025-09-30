/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squaredNums =  nums.map(num => num * num)
/**
 * array methods takes a cullback fun
 * when written on a single line like this, the result is given 'return' by default 
*/
console.log(nums) // this will return the old value: [1, 2, 3, 4, 5]. .map doesnt overide parent
console.log(squaredNums) // [1, 4, 9, 16, 25]


/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalizeFirst = names.map(function(name){
    return (
        name[0].toUpperCase() + name.slice(1)
        // name[0].toUpperCase() - since strings are arrays. .uppercase turn that index to Cap
        // name.slice(1) - returns a new array after copying to it all items from given index..
        // of old array. .slice(1) is basically saying:
        // give me everything from this (1) point upto the end
        // .slice() will give everything - a duplicate
    )
})
console.log(capitalizeFirst) // ['Alice', 'Bob', 'Charlie', 'Danielle']
// can also be written in shorter form as 
const caps = names.map(name => name[0].toUpperCase() + name.slice(1))
console.log(caps) // ['Alice', 'Bob', 'Charlie', 'Danielle']



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
const paragraphed = pokemon.map(poke => `<p>${poke}</p>`)
console.log(paragraphed) // ['<p>Bulbasaur</p>', '<p>Charmander</p>', '<p>Squirtle</p>']

