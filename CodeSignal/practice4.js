// You've created a new programming language, and now you've decided to add hashmap support to it.
//Actually you are quite disappointed that in common programming languages it's impossible to add a number to all hashmap keys,
// or all its values. So you've decided to take matters into your own hands and implement your own hashmap in your new language
// that has the following operations:

// insert x y - insert an object with key x and value y.
// get x - return the value of an object with key x.
// addToKey x - add x to all keys in map.
// addToValue y - add y to all values in map.
// To test out your new hashmap, you have a list of queries in the form of two arrays: queryTypes contains the names of
// the methods to be called (eg: insert, get, etc), and queries contains the arguments for those methods (the x and y values).

// Your task is to implement this hashmap, apply the given queries, and to find the sum of all the results for get operations.

function solution(queryType, queries) {
  let map = new Map();
  let result = 0;

  for (let i = 0; i < queryType.length; i++) {
    let type = queryType[i];
    let query = queries[i];

    switch (type) {
      case "insert":
        map = insert(query[0], query[1], map);
        break;

      case "get":
        if (map.has(query[0])) {
          result += map.get(query[0]);
        }
        break;

      case "addToKey":
        let tempMap = new Map();
        map.forEach((value, key) => {
          tempMap.set(key + query[0], value);
        });
        map = new Map(tempMap);
        break;

      case "addToValue":
        map.forEach((value, key) => {
          map.set(key, value + query[0]);
        });
        break;
    }
  }
  return result;
}

function insert(key, value, map) {
  map.set(key, value);
  return map;
}
