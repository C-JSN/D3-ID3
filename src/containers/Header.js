import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getScatterPlot } from '../actions/ScatterPlotActions';
import { getD3ParserObj } from '../actions/D3ParserActions';
import { ScatterPlotReducer, D3ParserReducer } from '../reducers/index';
import HeaderToolbar from '../components/header/HeaderToolbar';
const {ipcRenderer} = require('electron')

class Header extends Component {

  // event handler for toggling the dropdown menu
  toggleDropDown(event) {
    document.getElementById("template-menu").classList.toggle("show");
  }

  openDataWin(event) {
    console.log(__dirname)

  }

  // testfunc(){
  //   console.log('---------checking if we can call two functions onclick')
  // }

  render() {
    return (
      <header className="toolbar toolbar-header">
        <h1 className="title">Project Name</h1>
        <HeaderToolbar getD3ParserObj={this.props.getD3ParserObj} getScatterPlotAction={this.props.getScatterPlot} toggleDropDown={this.toggleDropDown}
        openDataWin={this.openDataWin}/>
      </header>
    );
  }
}

function mapStateToProps({ ScatterPlotReducer, D3ParserReducer }) {
  return { ScatterPlotReducer, D3ParserReducer }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getScatterPlot, getD3ParserObj }, dispatch);
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
