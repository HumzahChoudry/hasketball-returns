### Hashketball Returns Notes

1. What is redux, why use it

* Global Store, single source of truth

2. Quick basics

* Actions - plain js objects!
  * Stores type, will hit a case in your reducer
  * Stores payload, data needed to update state
* Reducers - pure function that updates your state.
* Store - holds state
  * Allows access to state
  * allows state to be updated via dispatch

3. Connecting react to redux

* Provider - wraps your entire app, allows store to be used in components
* connect, wraps an individual component and allows you to use mapStateToProps and mapDispatchToProps.

### Lecture Notes

1. Go over current code
2. Install redux and react-redux
3. Import createStore from redux, why use curly brackets??!?

* What does a store need? A reducer! Lets make one.
* Create reducers, all that is, is a pure function that returns state. A big case statement essentially, takes in 2 args, state and action (state, action)
* reducer needs a default state
* import Provider, what does this do?
