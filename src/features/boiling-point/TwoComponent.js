import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class TwoComponent extends Component {
  static propTypes = {
    boilingPoint: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  
  render() {
    const bgColor = {
      backgroundColor: `rgb(0,${this.props.boilingPoint.number},0)`
    }
    return (
      <div className="boiling-point-two-component" style={bgColor}>
        Component content: boiling-point/TwoComponent
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    boilingPoint: state.boilingPoint
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({...actions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwoComponent)