import axios from 'axios';

export const actionTypes = {
  GYM_REQUEST: 'GYM_REQUEST',
  GYM_SUCCESS: 'GYM_SUCCESS',
  GYM_FAILURE: 'GYM_FAILURE',
  API_CALL_FAILURE: 'API_CALL_FAILURE',
  API_CALL_SUCCESS: 'API_CALL_SUCCESS',
};

export function gymRequest() {
  return {
    type: actionTypes.GYM_REQUEST,
  };
}

export function gymSuccess(value) {
  return {
    type: actionTypes.GYM_SUCCESS,
    payload: value,
  };
}

export function gymFailure() {
  return {
    type: actionTypes.GYM_FAILURE,
  };
}

// export function apiCallFailure() {
//   return {
//     type: actionTypes.API_CALL_FAILURE,
//   };
// }
// export function apiCallSuccess(apiData) {
//   return {
//     type: actionTypes.API_CALL_SUCCESS,
//     payload: apiData,
//   };
// }

export function apiCall(URL) {
  return dispatch => {
    dispatch(gymRequest());

    axios
      .get(URL)
      .then(res => {
        console.log('res:', res.data);

        dispatch(gymSuccess(res.data));
      })
      .catch(err => {
        dispatch(gymFailure());
        console.log('err:', err);
      });
  };
}
