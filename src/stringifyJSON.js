// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';

  if (Array.isArray(element)) {
    result += '[';
    result += element.map(function(el) {
      return stringifyJSON(el);
    }).join(',');
    result += ']';
  } else if (typeof element === 'object' && element !== null) {
    result += '{';
    for (var key in element) {
      if (element[key] !== undefined && typeof element[key] !== 'function') {
        result += '"' + key + '"' + ':' + stringifyJSON( element[key] ) + ',';
      }
    }
    if (result.length > 1) {
      result = result.slice(0, result.length - 1) + '}'; 
    } else {
      result += '}';
    }
  } else if (typeof element === 'string') {
    result += '"' + element + '"';
  } else {
    result += element;
  }
  return result;
};