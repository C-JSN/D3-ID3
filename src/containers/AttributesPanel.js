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
    ipcRenderer.send('updateNewWebView');
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
          <header className="toolbar toolbar-header attr-main-header">
            <h1 className="title main-header">Attributes Panel</h1>
            <button className="btn btn-primary generate-btn" id="d3parser" onClick={(e)=>getD3ParserObj()}>
              Generate
            </button>
          </header>
          <div id="attr-panel">
            <div className="parsed-attr-container">
              <form id="attrForm" onSubmit={(e) => this.handleSubmit(e, D3ParserObj)}>
                {attrList}
              </form>
            </div>
          </div>
          <div className="submit-btn">
            <button type="submit" className="btn btn-primary attr-submit-btn" form="attrForm">Save</button>
          </div>
        </div>
      )
    }

    return (
      <div className="pane-one-fourth">
        <header className="toolbar toolbar-header attr-main-header">
          <h1 className="title main-header">Attributes Panel</h1>
          <button className="btn btn-primary generate-btn" id="d3parser" onClick={(e) => getD3ParserObj()}>
            Generate
          </button>
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
        <div className="submit-btn">
          <button className="btn btn-primary attr-submit-btn" type="submit">Save</button>
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
