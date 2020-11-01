import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer'
import paymentDialogReducer from './paymentDialogReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer,
    paymentDialog: paymentDialogReducer
});