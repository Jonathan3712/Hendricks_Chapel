// src/redux/reducers/someReducer.js
const initialState = {
    example: 'Hello, Redux!',
  };
  
  const someReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default someReducer;
  