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
    obj.forEach(function(element) {
      return result += stringifyJSON(element);
    });
    console.log(result)
  }
  if (isArray) {
    if (obj.length === 0) {
      return '[]';
    }
    var temp = result.split(' ');
    //console.log(temp);
    return `[${temp}]`;
  }

};

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