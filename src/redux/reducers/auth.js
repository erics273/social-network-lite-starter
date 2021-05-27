import * as types from "../actions/actionTypes";

const initialState = {
    token: "",
    username: ""
}

const getInitStateFromStorage = (key, initialState) => {
    const storedState = JSON.parse(localStorage.getItem(key));
   
    if (storedState) {
      const unchangedInitialStateProps =
        Object.keys(storedState).every(
          property => initialState[property] !== undefined
        ) &&
        Object.keys(initialState).every(
          property => storedState[property] !== undefined
        );
      if (unchangedInitialStateProps) {
        console.log(storedState, "stored")
        return storedState;
      }
    }
    return initialState;
  };

export default function authReducer(state = getInitStateFromStorage("auth", initialState), action) {

  switch (action.type) {

    case types.LOGIN:
      return Object.assign({}, state, 
            {
                token: action.payload.token, 
                username: action.payload.username
            }
        );

    default:
      return state;
  }
}