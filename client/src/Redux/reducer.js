import { actionTypes } from './action';

const init = {
  isLoading: false,
  isError: false,
  data: [],
};

function gymReducer(state = init, action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GYM_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case actionTypes.GYM_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.GYM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };

    default:
      return state;
  }
}

export default gymReducer;
