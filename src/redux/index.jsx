import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk'
export {default as actions} from './actions';
export * from './type';

export default createStore(reducer,applyMiddleware(thunk));
