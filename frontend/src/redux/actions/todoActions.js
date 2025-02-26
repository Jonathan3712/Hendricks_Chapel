// export const fetchTodos = () => async (dispatch) => {
//     const response = await fetch('/api/todos');
//     const data = await response.json();
//     dispatch({ type: 'FETCH_TODOS', payload: data });
//   };
  // src/actions/todoActions.js or wherever the API call is made
// import axios from 'axios';

// export const fetchTodos = () => async (dispatch) => {
//   try {
//     const response = await axios.get('/api/todos');
    
//     // Make sure the response data is an array
//     if (Array.isArray(response.data)) {
//       dispatch({ type: 'SET_TODOS', payload: response.data });
//     } else {
//       console.error('Expected array, but got', response.data);
//     }
//   } catch (error) {
//     console.error('Error fetching todos:', error);
//   }
// };
