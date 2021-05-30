const SET_USER = "SET_USER";
const SET_USER_STATUS = "SET_USER_STATUS";


const defaultState = {
  userName: null,
  isNotFound: false
}


export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userName: action.payload
      };
    case SET_USER_STATUS:
      return {
        ...state,
        isNotFound: action.payload
      };
    default:
      return state
  }
}

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setUserStatus = (bool) => ({ type: SET_USER_STATUS, payload: bool });
