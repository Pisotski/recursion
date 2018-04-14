// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, el) {

	if (!el) {
		el = document.body;
	}

	var result = [];
	if (el.classList.contains(className)) {
		result.push(el);
	};

    _.each(el.children, function(childNode) {
      result = result.concat(getElementsByClassName(className, childNode));
    });
  return result;
};
