import {
  CHANGE_SEARCH_FIELD,
  FETCH_REPOS_PENDING,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_ERROR,
  SEARCH_FIELD_FOCUS,
  SEARCH_FIELD_BLUR,
} from './constants'

import history from "../history/history";
import api from "../api";

export const buttonClickAction = (event) => (dispatch, getState) => {
  dispatch(fetchReposPending(true));
  return api.repos.getRepos(getState().changeSearchBlockReducer.searchFieldValue)
    .then(
      response => dispatch(fetchReposSuccess(response)),
      err => dispatch(fetchReposError(err))
    );
};

export const searchFieldChangeAction = (event) => {
  if(event.key === "Enter" && event.target.value) {
    history.push('/results');
    return buttonClickAction(event)
  } else {
    return {
      type: CHANGE_SEARCH_FIELD,
      payload: event,
    }
  }
};

function fetchReposPending(payload) {
  return {
    type: FETCH_REPOS_PENDING,
    payload
  };
}

function fetchReposSuccess(payload) {
  return {
    type: FETCH_REPOS_SUCCESS,
    payload
  };
}

function fetchReposError(payload) {
  return {
    type: FETCH_REPOS_ERROR,
    payload
  };
}

export const searchFieldFocusAction = (event) => {
  return {
    type: SEARCH_FIELD_FOCUS,
    payload: {
      line: "1px solid rgba(96, 64, 176, 1)",
      textUnderSearchFieldColor: "rgba(96, 64, 176, 1)",
      progressBar: "100%",
    },
  }
};

export const searchFieldBlurAction = (event) => {
  return {
    type: SEARCH_FIELD_BLUR,
    payload: {
      line: "1px solid rgba(66, 66, 66, 0.4)",
      textUnderSearchFieldColor: "rgba(66, 66, 66, 0.4)",
      progressBar: "0%",
    },
  }
};


