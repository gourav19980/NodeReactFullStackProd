import authReducers from './authReducers';
import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';


export default combineReducers({
    auth:authReducers,
    form:reduxForm
});