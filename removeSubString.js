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

  let i = 0;
  let matchChar = 0;
  let foundMatch = false;
  let matchCount = 0;

//   do {
    foundMatch = false;
    i = 0;
    matchIdx = 0;
    
    while( i < fromText.length && foundMatch == false) {
      if(fromText[i] === matchString[i] ) {
        matchCount++;
        if(matchCount >= matchString.length) {
          // we have a match
          foundMatch = true;
          fromText = fromText.slice(0, matchIdx) 
            + fromText.slice(matchIdx, matchIdx + matchCount);
        }
      } else {
        matchIdx = i;
        matchCount = 0;
      }
    }

    
//   } while (foundMatch === true);

  return fromText;
}

console.log("hello");
var matchString = "ABC";
var fromText = "ABCDEF";
console.log( remove(matchString, fromText) );
