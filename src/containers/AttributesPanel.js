import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getScatterPlot, updateWidth } from '../actions/ScatterPlotActions';
import { ScatterPlotReducer } from '../reducers/index';
import Dimensions from '../components/attributes/scatter-plot/Dimensions';
import Axes from '../components/attributes/scatter-plot/Axes';
import LocalAttributes from '../components/attributes/scatter-plot/LocalAttributes';
import Data from '../components/attributes/scatter-plot/Data';


class AttributesPanel extends Component {

  render() {
    // State from ScatterPlotReducer
    const ScatterPlotObj = this.props.ScatterPlotReducer;
    // Attributes For Scatter Plot
    const margin = ScatterPlotObj.margin;
    const width = ScatterPlotObj.width;
    const height = ScatterPlotObj.height;
    const responsiveResize = ScatterPlotObj.responsiveResize;
    const axes = ScatterPlotObj.axes;
    const gridLines = ScatterPlotObj.gridLines;
    const regressionLine = ScatterPlotObj.regressionLine;
    const toolTip = ScatterPlotObj.toolTip;
    const scatterPlot = ScatterPlotObj.scatterPlot;
    const data = ScatterPlotObj.data;

    return(
      <div className="pane-one-fourth">
        <div id="attr-panel">
          <Dimensions
            margin={margin}
            width={width}
            height={height}
            responsiveResize={responsiveResize}
            controlWidth={this.props.updateWidth}
            />
          <Axes axes={axes} />
          <LocalAttributes
            gridLines={gridLines}
            regressionLine={regressionLine}
            tooTip={toolTip}
            scatterPlot={scatterPlot} />
          <Data />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ ScatterPlotReducer }) {
  return { ScatterPlotReducer }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getScatterPlot, updateWidth }, dispatch);
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(Object.assign({}, getScatterPlot, updateWidth), dispatch)
//   }
// }

//example from react-redux api
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(Object.assign({}, todoActionCreators, counterActionCreators), dispatch)
//   }
// }



export default connect(mapStateToProps, mapDispatchToProps)(AttributesPanel);
