import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getScatterPlot } from '../actions/ScatterPlotActions';
import { ScatterPlotReducer, D3ParserReducer } from '../reducers/index';
import { getD3ParserObj, updateValue } from '../actions/D3ParserActions';
import AttrListItem from '../components/attributes/attr_list_item';

import fs from 'fs';
// import Dimensions from '../components/attributes/scatter-plot/Dimensions';
// import Axes from '../components/attributes/scatter-plot/Axes';
// import Data from '../components/attributes/scatter-plot/Data';
// import GridLines from '../components/attributes/scatter-plot/GridLines';
// import RegressionLine from '../components/attributes/scatter-plot/RegressionLine';
// import ScatterPlotAttr from '../components/attributes/scatter-plot/ScatterPlotAttr';

class AttributesPanel extends Component {
  
  handleSubmit(e, obj) {
    e.preventDefault();
    let string = JSON.stringify(obj, null, '\t')
    fs.writeFileSync('./src/d3ParserObj.js', string);
  }

  render() {
    // State from ScatterPlotReducer
    // const ScatterPlotObj = this.props.ScatterPlotReducer;
    // console.log('Scatter', ScatterPlotObj);
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

    if (D3ParserObj.length === 0) {
      return <div className="pane-one-fourth">Upload some data!</div>;
    }

    const attrList = D3ParserObj.map((obj, i) => {
      return <AttrListItem key={obj.id} updateValue={this.props.updateValue} info={[obj, i]} />
    });

    return(
      <div className="pane-one-fourth">
        <div id="attr-panel">
          <h4>Plot</h4>
            <form onSubmit={(e) => this.handleSubmit(e, D3ParserObj)}>
              {attrList}
              <input type="submit" />
            </form>
          {/*<Axes axes={axes} />
          <GridLines gridLines={gridLines} />
          <RegressionLine regressionLine={regressionLine} />
          <ScatterPlotAttr scatterPlot={scatterPlot} />
          <Data data={data} />*/}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ ScatterPlotReducer, D3ParserReducer }) {
  return { ScatterPlotReducer, D3ParserReducer }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getScatterPlot, getD3ParserObj, updateValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AttributesPanel);
