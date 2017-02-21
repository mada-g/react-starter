import React from 'react';
import reactDOM from 'react-dom';
import {createStore, applyMiddleware, dispatch} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import {Map, List, toJS, fromJS} from 'immutable';

import reducer from '../store/reducer.js';
import actions from '../store/actions.js';

import AppRoot from '../components/root/root.jsx';
import './style.scss';

const initState = fromJS({ counter: {val: 0} });

/** Create Store **/

let store = createStore(reducer, initState, applyMiddleware(thunkMiddleware));

/*****************************************
** INJECT ROOT REACT COMPONENT INTO DOM **
*****************************************/

reactDOM.render(
  <Provider store={store}><AppRoot/></Provider>,
  document.getElementById('react-app')
);
