import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class FourComponent extends Component {
  static propTypes = {
    boilingPoint: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const bgColor = {
      backgroundColor: `rgb(${this.props.boilingPoint.number},0,0)`
    }
    return (
      <div className="boiling-point-four-component" style={bgColor}>
        Component content: boiling-point/FourComponent
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
    actions: bindActionCreators({...actions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (FourComponent)