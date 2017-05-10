import ScatterPlotObject from '../templates/ScatterPlotObject';

export const SCATTER_PLOT = "SCATTER_PLOT";

export function getScatterPlot() {
  console.log('ACTION CREATOR CALLED');
  return {
    type: SCATTER_PLOT,
    payload: ScatterPlotObject
  };
}
