import authReducer from './authReducer'
import goalReducer from './goalReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';



const rootReducer = combineReducers({
  auth: authReducer,
  goal: goalReducer,
  firestore: firestoreReducer
});

export default rootReducer

// the key name will be the data property on the state object