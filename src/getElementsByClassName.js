// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // declaring node as either the second argument if given, 
  // or as document.body (the top of the HTML)
  node = node || document.body
  var nodes = [];
  // declare a variable to represent all class names, and split
  // each class name
  var allClassNames = node.className.split(' ');
  // if it is not -1 (meaning nonexistent), push existing node into nodes array
  if (allClassNames.indexOf(className) !== -1) {
    nodes.push(node);
  }

  // iterate through child nodes, as they also may have className
  for (var i = 0; i < node.children.length; i++) {
  // recursively call getElementsByCLassName for each childnode
    var childResults = getElementsByClassName(className, node.children[i]);
    nodes = nodes.concat(childResults); // concat results meow
  }
  return nodes;
};
