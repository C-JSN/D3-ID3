import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { getScatterPlot } from '../actions/ScatterPlotActions';
// import { ScatterPlotReducer } from '../reducers/index';

class AttributesPanel extends Component {
  render() {
    return (
      <div className="pane-one-fourth">
        <h3>Attributes Panel</h3>
      </div>
    );
  }
}

// function mapStateToProps({ ScatterPlotReducer }) {
//   return { ScatterPlotReducer }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ getScatterPlot }, dispatch);
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(AttributesPanel);
export default AttributesPanel
