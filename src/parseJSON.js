 // this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

var parsed = {};

// if / else statements to determine what type of thing is being parsed
 

// nextCharacter function to keep the track of our place 
// in the string and get the next character
var nextChar = function() {
  // Idea #1: iterate through json with a for loop, and 
  // keep track of what index we are on, and update the index after
  // determining the "type of thing"

//declare the starting index as 0 in the json string
/*var tempStr = json.slice(0);
while (tempStr.length !== 0) {


}*/
var currentIndex = 0;
for (var i = currentIndex; i < json.length; i++ ) {
// figure out what type of thing 
  if (typeof json === 'string') {
  
}
// parser()
// update currentIndex
// remove thing from json (from index 0 to currentIndex-1)

}

};

// function to parse object
var parser = function() {
// parse members

// parse a pair

// parse an array

// parse elements

// parse a primitive value
};
return parsed;

};
