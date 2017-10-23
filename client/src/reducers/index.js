/**
 * Created by Bien on 2017-10-22.
 */
import { combineReducers } from 'redux';
import authReducer from './authReducer';


export default combineReducers({
   auth: authReducer
});