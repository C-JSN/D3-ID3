import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getScatterPlot } from '../actions/ScatterPlotActions';
import { ScatterPlotReducer } from '../reducers/index';
import HeaderToolbar from '../components/header/HeaderToolbar';

class Header extends Component {
  toggleDropDown(event) {
    document.getElementById("template-menu").classList.toggle("show");
  }

  render() {
    return (
      <header className="toolbar toolbar-header">
        <h1 className="title">Project Name</h1>
        <HeaderToolbar getScatterPlotAction={this.props.getScatterPlot} toggleDropDown={this.toggleDropDown} />
      </header>
    );
  }
}

function mapStateToProps({ ScatterPlotReducer }) {
  return { ScatterPlotReducer }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getScatterPlot }, dispatch);
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
