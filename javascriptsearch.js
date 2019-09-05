/*var paragraph =`The quick brown fox jumps over the lazy dog. If the dog barked,was it really lazy?`

// any character that is not a word c haracter or whitespace
var regex= /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// expected output: "."

*/

var paragraph =`The quick brown fox jumps over the lazy dog. If the dog barked,was it really lazy?`

var searchterm =`dog`;

console.log(`the index of the first "` +searchterm +`" from the end is ` +paragraph.lastIndexOf(searchterm));
//expected output:"the index of the first "dog" from the end is 52