import {combineReducers} from 'redux-immutable';
import {Map, List, fromJS, toJS} from 'immutable';

import counter from './reducers/counter.js';

export default combineReducers({
  counter: counter
});
