import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getScatterPlot } from '../actions/ScatterPlotActions';
import { getD3ParserObj } from '../actions/D3ParserActions';
import { toTemplate, toUserCode } from '../actions/ProjectTypeActions';
import { ScatterPlotReducer, D3ParserReducer } from '../reducers/index';
import HeaderToolbar from '../components/header/HeaderToolbar';
import {app, BrowserWindow} from 'electron';

class Header extends Component {

  // event handler for toggling the dropdown menu
  toggleDropDown(event) {
    document.getElementById("template-menu").classList.toggle("show");
  }

  // testfunc(){
  //   console.log('---------checking if we can call two functions onclick')
  // }

  render() {
    return (
      <header className="toolbar toolbar-header main">
        <HeaderToolbar getD3ParserObj={this.props.getD3ParserObj} getScatterPlotAction={this.props.getScatterPlot} toggleDropDown={this.toggleDropDown} toTemplate={this.props.toTemplate} />
      </header>
    );
  }
}

function mapStateToProps({ ScatterPlotReducer, D3ParserReducer }) {
  return { ScatterPlotReducer, D3ParserReducer }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getScatterPlot, getD3ParserObj, toTemplate, toUserCode }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// componentDidMount() {
//   const dropDownMenu = document.getElementById('templates');
//   const templateMenu = document.getElementById('template-menu');
//   const scatterPlotTemp = document.getElementById('scatter-plot');
//
//   dropDownMenu.addEventListener('click', (event) => {
//     templateMenu.classList.toggle("show");
//   });
//
//   scatterPlotTemp.addEventListener('click', (event) => {
//     // console.log(event);
//     this.props.getScatterPlot();
//   })
//
//   window.onclick = function(event) {
//     if (!event.target.matches('.btn-dropdown')) {
//
//       let dropdowns = document.getElementsByClassName("dropdown-menu");
//
//       for (let i = 0; i < dropdowns.length; i += 1) {
//         let openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
// }
