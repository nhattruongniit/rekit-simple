import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import OneComponent from './OneComponent';
import TwoComponent from './TwoComponent';
import ThreeComponent from './ThreeComponent';
import FourComponent from './FourComponent';

export class DefaultPage extends Component {
  static propTypes = {
    boilingPoint: PropTypes.object.isRequired,
    examples: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="boiling-point-default-page">
        <div>{this.props.examples.count}</div>
        <OneComponent />
        <TwoComponent />
        <ThreeComponent />
        <FourComponent />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    boilingPoint: state.boilingPoint,
    examples: state.examples
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
