# Redux

## what is it
Single source of truth that manages the state of the application. It is not framework dependent, though there was a time when was tied closely to React

## when should you reach for Redux opps


## How to use it

1. Actions
  The way to send info from the application to the store. Which are just JS objects.
  a. Action Creator are function that returns a actions
2. Reducers 
  handles how the state is changed.
3. all the application stat is stored in single object. Determine how the UI state is going to be, and keep it normalized as possible,  meaning with out nesting, 
  Think as the state as a database
4. Building reducer
  keep reducers pure 
  dont mutate the state, create copy of the object with Object.assign() or the spread operator
  
  c. handling More Actons
  


## Questions

how does this work with state machines,is it different or simular??

how does redux compare to useContext?

https://egghead.io/courses/getting-started-with-redux
