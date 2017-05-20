import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getScatterPlot, updateWidth } from '../actions/ScatterPlotActions';
import { getD3ParserObj, updateValue } from '../actions/D3ParserActions';
import { ScatterPlotReducer, D3ParserReducer } from '../reducers/index';
import AttrListItem from '../components/attributes/d3-parsed/AttrListItem';
import Dimensions from '../components/attributes/scatter-plot/Dimensions';
import Axes from '../components/attributes/scatter-plot/Axes';
import LocalAttributes from '../components/attributes/scatter-plot/LocalAttributes';
import Data from '../components/attributes/scatter-plot/Data';
const d3parser = require('../d3-parser/d3parser');
import { editor } from '../components/editor/textEditor';
import fs from 'fs';

const { ipcRenderer } = require('electron');

class AttributesPanel extends Component {

  componentDidMount() {
    let fileUpLoadBtn = document.getElementById('upload-file');
    fileUpLoadBtn.addEventListener('change', (event) => {
      setTimeout(() => {
        this.props.getD3ParserObj();
        this.forceUpdate();
      }, 0)
    });
    ipcRenderer.on('updateAttr', (event) => {
      this.props.getD3ParserObj();
      this.forceUpdate();
    });
  }

  handleSubmit(e, obj) {
    e.preventDefault();
    let d3string = JSON.stringify(obj, null, '\t')
    fs.writeFileSync('./src/d3ParserObj.js', d3string);
    let htmlString = d3parser.reCode(JSON.parse(d3string));
    fs.writeFileSync('./src/components/temp/temp.html', htmlString);
    editor.setValue(htmlString);
    document.querySelector('webview').reload();
  }

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

    const D3ParserObj = this.props.D3ParserReducer;

    // if (D3ParserObj.length === 0) {
    //   return <div className="pane-one-fourth">Upload some data!</div>;
    // }

    if (D3ParserObj.length > 0) {
      const attrObj = D3ParserObj.filter((el, i) => {
        if (typeof el === 'object' && el.hasOwnProperty('args')) {
          el.id = i;
          return true;
        }
      });

      const attrList = attrObj.map(obj => {
        return <AttrListItem key={obj.id} updateValue={this.props.updateValue} info={obj} />
      });
      return (
        <div className="pane-one-fourth">
          <div id="attr-panel">
            <div>
              <header className="toolbar toolbar-header attr-main-header">
                <span className="icon icon-login attr-main-icon"></span>
                <h1 className="title main-header">D3 Parser</h1>
              </header>
            </div>
            <header className="toolbar toolbar-header attr-header">
              <div className="d3legend">
                <div className="legend-header">
                  <span className="icon icon-stop icon-purple"></span>
                  <h5 className="title method-object-legend">Method Object</h5>
                </div>
                <div className="legend-header">
                  <span className="icon icon-stop icon-green"></span>
                  <h5 className="title method-name-legend">Method Name</h5>
                </div>
              </div>
            </header>
            <div className="parsed-attr-container">
              <form id="attrForm" onSubmit={(e) => this.handleSubmit(e, D3ParserObj)}>
                {attrList}
                <button className="btn btn-default parser-submit-btn" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="pane-one-fourth">
        <header className="toolbar toolbar-header attr-main-header">
          <h1 className="title main-header">Attributes Panel</h1>
        </header>
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
