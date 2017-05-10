import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getScatterPlot } from '../actions/ScatterPlotActions';
import { ScatterPlotReducer } from '../reducers/index';

class AttributesPanel extends Component {

  componentDidMount() {
    const dropDownMenu = document.getElementById('templates');
    const templateMenu = document.getElementById('template-menu');
    const scatterPlotTemp = document.getElementById('scatter-plot');

    dropDownMenu.addEventListener('click', (event) => {
      templateMenu.classList.toggle("show");
    });

    scatterPlotTemp.addEventListener('click', (event) => {
      // console.log(event);
      this.props.getScatterPlot();
    })

    window.onclick = function(event) {
      if (!event.target.matches('.btn-dropdown')) {

        let dropdowns = document.getElementsByClassName("dropdown-menu");

        for (let i = 0; i < dropdowns.length; i += 1) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  render() {
    console.log('HELLO', this.props);
    return (
      <div id="attr-panel">
        <h3>Attributes Panel</h3>
      </div>
    );
  }
}

function mapStateToProps({ ScatterPlotReducer }) {
  return { ScatterPlotReducer }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getScatterPlot}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AttributesPanel);
