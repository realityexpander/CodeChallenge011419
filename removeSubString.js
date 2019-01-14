
var textToRemove = "ABC";
var fromText = "ABCDEF";


function remove( textToRemove, fromText) {

  if(textToRemove === undefined)
    return fromText;

  textToRemove = textToRemove.split("");
  fromText = fromText.split("");

  let i = 0;
  let matchChar = 0;
  let foundMatch = false;
  let matchCount = 0;

  do {
    foundMatch = false;
    while( i < fromText.length) {
      if(fromText[i] === textToRemove[i] ) {
        matchCount++;
        matchIdx++;
        if(matchCount > textToRemove.length) {
          // we have a match
          foundMatch = true;
          fromText = fromText.slice(0, matchIdx) 
            + fromText.slice(matchIdx, matchIdx + matchCount); 
        }
      } else {
        matchIdx = i;
        matchCount=0;
      }
    }
  while( foundMatch === true);

  return fromText;

}


console.log(remove(textToRemove, fromText));
