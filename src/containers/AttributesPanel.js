import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getScatterPlot, updateWidth } from '../actions/ScatterPlotActions';
import { getD3ParserObj, updateValue } from '../actions/D3ParserActions';
import { ScatterPlotReducer, D3ParserReducer} from '../reducers/index';
import AttrListItem from '../components/attributes/attr_list_item';
import Dimensions from '../components/attributes/scatter-plot/Dimensions';
import Axes from '../components/attributes/scatter-plot/Axes';
import LocalAttributes from '../components/attributes/scatter-plot/LocalAttributes';
import Data from '../components/attributes/scatter-plot/Data';
import fs from 'fs';

class AttributesPanel extends Component {
  
  handleSubmit(e, obj) {
    e.preventDefault();
    let string = JSON.stringify(obj, null, '\t')
    fs.writeFileSync('./src/d3ParserObj.js', string);
  }

  render() {
    // State from ScatterPlotReducer
    const ScatterPlotObj = this.props.ScatterPlotReducer;
    // Attributes For Scatter Plot
    // const margin = ScatterPlotObj.margin;
    // const width = ScatterPlotObj.width;
    // const height = ScatterPlotObj.height;
    // const responsiveResize = ScatterPlotObj.responsiveResize;
    // const axes = ScatterPlotObj.axes;
    // const gridLines = ScatterPlotObj.gridLines;
    // const regressionLine = ScatterPlotObj.regressionLine;
    // const toolTip = ScatterPlotObj.toolTip;
    // const scatterPlot = ScatterPlotObj.scatterPlot;
    // const data = ScatterPlotObj.data;

    const D3ParserObj = this.props.D3ParserReducer;

    // if (D3ParserObj.length === 0) {
    //   return <div className="pane-one-fourth">Upload some data!</div>;
    // }

    if (D3ParserObj.length > 0) {
      const attrList = D3ParserObj.map((obj, i) => {
        return <AttrListItem key={obj.id} updateValue={this.props.updateValue} info={[obj, i]} />
      });
      return (
        <div className="pane-one-fourth">
          <div id="attr-panel">
            <h4>D3 Parsed</h4>
            <form onSubmit={(e) => this.handleSubmit(e, D3ParserObj)}>
              {attrList}
              <input type="submit" />
            </form>
          </div>
        </div>
      )
    }

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

function mapStateToProps({ ScatterPlotReducer, D3ParserReducer }) {
  return { ScatterPlotReducer, D3ParserReducer }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getScatterPlot, updateWidth, getD3ParserObj, updateValue }, dispatch);
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
