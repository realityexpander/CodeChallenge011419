// From XTivia
// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom


function remove( matchString, fromText) {

  if(matchString === undefined)
    return fromText;

  matchString = matchString.split("");
  fromText = fromText.split("");

  let i = 0; // index of current char in string
  let matchCharIdx = 0; // index of current match in the matchString
  let foundMatch = false;
  let matchCount = 0;
  let matchStart = 0; // start index of match in fromText string

  let x = 0;

  do {

    foundMatch = false;
    i = 0; 
    matchCount = 0;
    matchStart = 0;
    
    while( i < fromText.length) {
      if(fromText[i] === matchString[matchCount] ) {
        matchStart = matchCount === 0 ? i : matchStart;
        matchCount++;
//         matchCharIdx++;
        if(matchCount >= matchString.length) {
          // we have a match
         
          fromText = fromText.slice(0, Math.max(0, matchStart-1)) 
            .concat( fromText.slice(matchStart+matchCount, fromText.length+1) );
          i = 0;
          matchCount = 0;
          matchStart = 0;
          foundMatch = true;
        }
      } else {
//         matchCharIdx = 0;
        matchCount = 0;
        matchStart = i;
      }

      i++;
    }
    
  } while (foundMatch === true || x++>100);

  console.log(x);

  return fromText;
}

console.log("hello");
var matchString = "ABC";
var fromText = "ABCDEFABC";
console.log( remove(matchString, fromText) );
