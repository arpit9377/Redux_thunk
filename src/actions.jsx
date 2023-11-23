export const delData = () => {
    return {
      type: 'DELETE_DATA'
    };
  }
  
  export const addData = () => {
    return async (dispatch, getState) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await res.json();
  
      dispatch({
        type: 'ADD_DATA',
        payload: data
      });
    };
  }
  