---
title: Working with Javascript Objects
date: "2019-05-19"
description: JS object ain't no thing. this post will be a quick overview of how to work through a javascript object. Basicly the parse of a json file
---

## looking up Objects

There are two ways to look up an item in an object

Lets make an object working in automotive engineering, a lot of data is passes around. (there is a chance that might not full understand the data but we are not here to learn about the data, but to work with the data).

```javascript
const results = {
  model: "V00R00",
  modelDescript: ["increase side member thickness", "UAA updated shape"],
  stiffness: [{ xdir: "15 k/n" }, { ydir: "29 k/n" }, { zdir: "20 k/n" }],
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

- what other thing would be an issue
