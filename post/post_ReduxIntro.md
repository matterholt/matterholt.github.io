
# Redux

## what is it

Single source of truth that manages the state of the application. It is not framework dependent, though there was a time when was tied closely to React

The thought of keeping all the state in the store. It is interesting, The example shows that todo's list and completion list and visual all contained within the store.   I can see the value of keeping the state in one location easy to find and any change made would update all other components that depend on that state.

## My quick and simple overview

## How to use it

1. Actions
The way to send info from the application to the store. Which are just JS objects.
a. Action Creator are function that returns a actions
2. Reducers
handles how the state is changed.
3. all the application stats are stored in a single object. Determine how the UI state is going to be, and keep it normalized as possible, meaning without nesting,
Think as the state as a database
4. Building reducer
keep reducers pure
don't mutate the state, create copy of the object with Object.assign() or the spread operator

c. handling More Actons

## Questions

how does this work with state machines,is it different or simular??

how does redux compare to useContext?

[https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)
