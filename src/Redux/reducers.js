
import {
  CHANGE_SEARCH_FIELD,
  FETCH_REPOS_PENDING,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_ERROR,
  SEARCH_FIELD_FOCUS,
  SEARCH_FIELD_BLUR,
} from './constants'

const searchBlockInitialState = {
  searchFieldValue: '',
  isDisabledButton: true,
  isShowPreloader: true,
  repos: [],
  isLoaded: false
};

export const changeSearchBlockReducer = (state=searchBlockInitialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchFieldValue: action.payload.target.value,
        isDisabledButton: !action.payload.target.value,
      };
    case FETCH_REPOS_PENDING:
      return {
        ...state,
        isShowPreloader: action.payload,
        isLoaded: !action.payload,
      };
    case FETCH_REPOS_SUCCESS:
      if (action.payload.status === 200 && action.payload.data.items.length) {
        return {
          ...state,
          isShowPreloader: false,
          repos: action.payload.data.items,
          isLoaded: true,
        };
      }
      break;
    case FETCH_REPOS_ERROR:
      console.warn('something goes wrong', action.payload);
      return {
        ...state,
        isShowPreloader: true,
        isLoaded: false,
      };
    default:
      return state;
  }
};


const styleInitialState = {
  line: "",
  textUnderSearchFieldColor: "",
  progressBar: "0%",
};

export const styleReducer = (state=styleInitialState, action={}) => {
  switch(action.type) {
    case SEARCH_FIELD_FOCUS:
      return {
        ...state,
        ...action.payload,
      };
    case SEARCH_FIELD_BLUR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
