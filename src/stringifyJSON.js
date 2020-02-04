// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // var result = ""
  // check if obj is an array or object
  // have a flag var for obj or arr
  // depending on obj or arr we pick [] or {}
  // use typeof or === to check object and turn into string

  // if obj is array, passback through stringifyJSON

  var result = '';

  if (Array.isArray(obj)) {
    var isArray = true;
  } else if (typeof obj === 'object') {
    var isObject = true;
  }
  if ((typeof obj === 'number') || (obj === null) || (typeof obj === 'boolean')) {
    return result += obj;
  }
  if (typeof obj === 'string') {
    return result = `"${obj}"`;
  }
  if (isArray) {
    var finalArr = obj.map(function(element) {
      return stringifyJSON(element);
    });
    // console.log(result);
  }

  if (isArray) {
    if (obj.length === 0) {
      return '[]';
    }
    // console.log(result);
    var temp = finalArr.join(',');
    //console.log(temp);
    return `[${temp}]`;
  } else {

    var newStr = '{'
    // create an array of keys
    var objKeys = Object.keys(obj)
    if ( (objKeys.length === 0) || ('function' in obj) || ('undefined' in obj) ){
      return '{}'
    }
    // create an array of values
    var objValues = Object.values(obj)
    // loop over the keys array
    for (var i = 0; i < objKeys.length; i += 1) {
      newStr += stringifyJSON(objKeys[i]) + ':' + stringifyJSON(objValues[i]) + ','
    }
    return newStr.slice(0, newStr.length - 1) + '}'
    // concat keys: stringifyJSON(values)
  }

};
console.log(stringifyJSON({'a': {'b': 'c'}}))
// var stringifiableObjects = [
//   9,
//   null,
//   true,
//   false,
//   'Hello world',
//   [],
//   [8],
//   ['hi'],
//   [8, 'hi'], -> "[8,"hi"]"
//   [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
//   [8, [[], 3, 4]],
//   [[[['foo']]]],
//   {},
//   {'a': 'apple'},
//   {'foo': true, 'bar': false, 'baz': null},
//   {'boolean, true': true, 'boolean, false': false, 'null': null },
//   // basic nesting
//   {'a': {'b': 'c'}},
//   {'a': ['b', 'c']},
//   [{'a': 'b'}, {'c': 'd'}],
//   {'a': [], 'c': {}, 'b': true}
// ];