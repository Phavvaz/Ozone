import * as actionTypes from '../actionCreators/actionTypes.js';

const initialState = {
  docSize: null,
  fruitsData: [],
  imagesUrl: [],
  imageLoadingErr: [],
  fruit: null,
  imageUrl: '',
  loading: false,
  error: null,
  result: null
};

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_FRUITS:
      return {
        ...state,
        loading: true,
        error: null,
        fruitsData: [],
        imagesUrl: [],
        fruit: null
      };

    case actionTypes.INIT_FRUITS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        fruitsData: state.fruitsData.concat(action.fruit)
      };
    case actionTypes.DOC_SIZE:
      return {
        ...state,
        docSize: action.docSize
      };
    case actionTypes.INIT_FRUITS_FAILS:
      return {
        ...state,
        loading: false,
        error: action.error,
        fruitsData: [],
        imagesUrl: [],
        fruit: null
      };
    case actionTypes.GET_FRUIT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        fruit: action.doc
      };
    case actionTypes.INIT_FRUIT_IMG:
      return {
        ...state,
        loading: true,
        imagesUrl: []
      };

    case actionTypes.INIT_FRUIT_IMG_SUCCESS:
      return {
        ...state,
        loading: false,
        imagesUrl: state.imagesUrl.concat({
          id: action.id,
          imgUrl: action.url
        }),
        imageUrl: ''
      };
    case actionTypes.GET_FRUIT_IMG_2_SUCCESS:
      return {
        ...state,
        loading: false,
        imageUrl: action.url,
        imagesUrl: []
      };
    case actionTypes.INIT_FRUIT_IMG_FAILED:
      return {
        ...state,
        loading: false,
        imageLoadingErr: state.imageLoadingErr.concat(
          action.error
        )
      };
    case actionTypes.ADD_FRUIT_BEGINS:
      return {
        ...state,
        loading: true,
        error: null,
        result: null
      };
    case actionTypes.ADD_FRUIT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        result: action.success
      };
    case actionTypes.ADD_FRUIT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        result: null
      };
    default:
      return state;
  }
};

export default fruitsReducer;
