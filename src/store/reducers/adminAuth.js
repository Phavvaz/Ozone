import * as actionTypes from '../actionCreators/actionTypes';

const initialState = {
  loading: false,
  result: null,
  error: null,
  logOutState: null
};

const adminAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_BEGINS:
      return {
        ...state,
        loading: true,
        error: null
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        result: action.result
      };

    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        loading: null,
        error: action.error
      };

    case actionTypes.AUTH_LOGOUT_BEGINS:
      return {
        ...state,
        loading: true,
        error: null
      };

    case actionTypes.AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        result: null,
        error: null,
        logOutState: action.success
      };
    case actionTypes.AUTH_LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default adminAuthReducer;
