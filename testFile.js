/*ORIGINAL 
const name = "Copper"
console.log(name)

output after running npx eslint testFile.js

  1:14  error  Strings must use singlequote  quotes
  1:22  error  Missing semicolon             semi
  2:18  error  Missing semicolon             semi
  
  3 problems (3 errors, 0 warnings)
  3 errors and 0 warnings potentially fixable with the `--fix` option.

*/

//this is what it rewrote the code to after running the `--fix`
const name = 'Copper';
console.log(name);