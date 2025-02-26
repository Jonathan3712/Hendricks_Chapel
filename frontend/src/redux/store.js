// import { configureStore } from '@reduxjs/toolkit';

// const store = configureStore({
//   reducer: {}, // No reducers for now
// });

// export default store;
import { createStore, combineReducers } from 'redux';
import someReducer from './reducers/someReducer'; // Ensure this is a valid reducer

const rootReducer = combineReducers({
  someState: someReducer, // Add your reducers correctly
});

const store = createStore(rootReducer);

export default store;



// import { createStore, applyMiddleware } from 'redux';
// import { thunk } from 'redux-thunk'; // Correct import for thunk
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers'; // Ensure this path is correct

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)) // Apply thunk middleware
// );

// export default store;

// import { configureStore } from '@reduxjs/toolkit';
// // import thunk from 'redux-thunk';
// import { thunk } from 'redux-thunk';
// import rootReducer from './reducers';

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;
