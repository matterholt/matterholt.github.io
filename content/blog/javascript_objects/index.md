---
title: Working with Javascript Objects
date: "2019-05-19"
description: JS object ain't no thing. this post will be a quick overview of how to work with javascript object. Basicity the parse of a json file
---

## creating an Object

## 1

## looking up Objects

There are two ways to look up an item in an object

Lets make an object working in automotive engineering, a lot of data is passes around. (there is a chance that might not full understand the data but we are not here to learn about the data, but to work with the data).

```javascript
const results = {
  model: "V00R00",
  modelDescript: ["increase side member thickness", "UAA updated shape"],
  stiffness: [{ xdir: "15 k/n" }, { ydir: "29 k/n" }, { zdir: "20 k/n" }],
  static: [
    { testOne: "pass" },
    { testTwo: "fail" },
    { testThree: "pass" },
    { testFour: "" },
    { testFive: "pass" },
  ],
}
```

### dot notation

```javascript
results.stiffness[1]

{
  ydir: "29 k/n"
}
```

### bracket notation

```javascript
results["stiffness"][1]
{
  ydir: "29 k/n"
}
```

both yield the same results and can be used but there is time when to use one or the other.

- with passing a variable in to a function

  > - the variable that is passed in to the function will not be define, so will need to put quotes around the input. the dot notation would look like this `results."stiffness"[1]` and this wont work since the key would be a string and would not find the value.

- what other thing would be an issue??

## Testing if Object are there

Good practice to check if the object is there or not. For our( `results` object ) example maybe we haven't check those type of results or ran the analysis on the model.

we need to check if Durability was completed on the model. Applying the `.hasOwnProperty()` method on the object.

```javascript
hasOwnProperty()

// our object for referance
const results = {
  model: "V00R00",
  modelDescript: ["increase side member thickness", "UAA updated shape"],
  stiffness: [{ xdir: "15 k/n" }, { ydir: "29 k/n" }, { zdir: "20 k/n" }],
  static: [
    { testOne: "pass" },
    { testTwo: "fail" },
    { testThree: "pass" },
    { testFour: "" },
    { testFive: "pass" },
  ],
}

results.hasOwnProperty("Stiffness")
// true
```

Fairly simple, define the object, apply method, what property looking. Lets make this more modular and able to use it more than once. Make it a function

> Extra info on hasOwnProperty check out [MDN web doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

```javascript
function checkObj(validateObj, checkProp) {
  const value = validateObj.hasOwnProperty(checkProp)
  if (value) {
    //short way of true (also value == true) would work)
    console.log("property found in object")
    return validateObj[checkProp]
  } else {
    return "Not Found"
  }
}
```

ok Lets check to see if our logic work. First check that we do have a property on the object. Then check for something that doesn't exist in the object.

> - the benefit is when you have a large group of object that should consist the same amount of data. If we think about the example, there are multiple versions of the model to get the desire target. Many time we just run one analysis until it passes.

> - Making the data do something if desired property is found. So say we did find durability result. Then we could render a durability page or chart.

```javascript
// property is in the object
function checkObj(results,'stiffness')
"property found in object"

// property not found example
function checkObj(results,'durability')
"Not Found"
```
