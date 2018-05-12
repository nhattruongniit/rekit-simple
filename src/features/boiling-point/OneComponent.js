import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class OneComponent extends Component {
  static propTypes = {
    boilingPoint: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="boiling-point-one-component">
        Component content: boiling-point/OneComponent
        <button onClick={this.props.actions.changeColor}>Click me</button>
      </div>
    );
  }
}


function mapStateToProps(state){
  return{
    boilingPoint: state.boilingPoint
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators({...actions }, dispatch)
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(OneComponent)