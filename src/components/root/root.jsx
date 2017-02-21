import React from 'react';
import {connect} from 'react-redux';
import {toJS} from 'immutable';

import actions from '../../store/actions.js';

class AppRoot extends React.Component{
  constructor(){
    super();
  }

  increment = () => {
    this.props.increment();
  }

  render(){
    return <div className="container" onClick={this.increment}>
      <div className="increment-button">Click To Increment</div>
      <div className="increment-value">{this.props.state.counter.val}</div>
    </div>
  }
}

function mapState(state){
  return {
    state: state.toJS()
  }
}

export default connect(mapState, actions)(AppRoot);
