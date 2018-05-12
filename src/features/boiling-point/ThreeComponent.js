import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class ThreeComponent extends Component {
  static propTypes = {
    boilingPoint: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };


  render() {

    const bgColor ={
      backgroundColor: `rgb(10,10, ${this.props.boilingPoint.number})`
    }
    return (
      <div className="boiling-point-three-component" style={bgColor}>
        Component content: boiling-point/ThreeComponent
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

export default connect(mapStateToProps, mapDispatchToProps)(ThreeComponent)