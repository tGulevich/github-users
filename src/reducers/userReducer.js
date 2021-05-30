const SET_USER = "SET_USER"

const defaultState = {
  userName: null,
  // isFetching: true,
}


export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userName: action.payload
      }
    default:
      return state
  }
}

export const setUser = (user) => ({ type: SET_USER, payload: user })