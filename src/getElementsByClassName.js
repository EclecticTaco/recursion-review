// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  innerFunc = function (element) {
    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }
    if (element.childNodes) {
      for (var i = 0; i < element.childNodes.length; i += 1) {
        innerFunc(element.childNodes[i]);
      }
    }
  }
  innerFunc(document.body)
  return result
};

// You should use
// document.body,
// element.childNodes,
// element.classList

// <div class="aClass">

