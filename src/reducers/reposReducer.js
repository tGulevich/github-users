
const SET_REPOS = "SET_REPOS";
const SET_CURR_PAGE = "SET_CURR_PAGE";
const SET_LOADING_STATUS = "SET_LOADING_STATUS";

const defaultState = {
  reposItems: null,
  currPage: 1,
  isLoading: false
}

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        reposItems: action.payload
      };
    case SET_CURR_PAGE:
      return {
        ...state,
        currPage: action.payload
      };
    case SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state
  }
}

export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos });
export const setCurrPage = (pageNumber) => ({ type: SET_CURR_PAGE, payload: pageNumber });
export const setLoadingStatus = (bool) => ({ type: SET_LOADING_STATUS, payload: bool });
