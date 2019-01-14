// From XTivia

// Remove the matchString from the fromText String.
// Can't use any library functions.
// Works in O(n) time and O(1) space


function remove( matchString, fromText) {

  if(fromText === undefined)
    return '';
  if(matchString === undefined)
    return fromText;

  matchString = matchString.split("");
  fromText = fromText.split("");

  let i = 0; // index of current char in fromText string
  let matchCount = 0; // char count of current matching strings
  let matchStart = 0; // start index of match in fromText string
  let foundMatch = false; // Keep searching?

  do {
    foundMatch = false;
    i = 0; 
    matchCount = 0;
    matchStart = 0;
    
    while( i < fromText.length) {
      if(fromText[i] === matchString[matchCount] ) {
        matchStart = matchCount === 0 ? i : matchStart; // start of match or continue matching?
        matchCount++;

        if(matchCount >= matchString.length) { // we have a match
          fromText = fromText.slice(0, Math.max(0, matchStart))  // Concat the left and right sides "ABC" - "B" => "AC"
            .concat( fromText.slice(matchStart + matchCount, fromText.length+1) );

          i = 0;
          matchCount = 0;
          matchStart = 0;
          foundMatch = true;
        }
      } else {
        matchCount = 0;
        matchStart = i;
      }

      i++;
    }
    
  } while (foundMatch === true);


  return fromText.join("");
}

console.log( remove("Athanas", "Chris Athanas") ); // => "Chris "
console.log( remove("ABC", "ABCXYZABCABC")); // => "XYZ"
