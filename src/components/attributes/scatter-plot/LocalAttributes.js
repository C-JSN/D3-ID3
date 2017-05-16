import React from 'react';
import GridLines from './local-attributes/GridLines';
import RegressionLine from './local-attributes/RegressionLine';
import ToolTip from './local-attributes/ToolTip';
import ScatterPlotAttr from './local-attributes/ScatterPlotAttr';

export default (props) => {
  const gridLines = props.gridLines;
  const regressionLine = props.regressionLine;
  const toolTip = props.toolTip;
  const scatterPlot = props.scatterPlot;

  return(
    <div className="local-attributes-container">
      <GridLines gridLines={gridLines} />
      <RegressionLine regressionLine={regressionLine} />
      <ToolTip toolTip={toolTip} />
      <ScatterPlotAttr scatterPlot={scatterPlot} />
    </div>
  );
}
