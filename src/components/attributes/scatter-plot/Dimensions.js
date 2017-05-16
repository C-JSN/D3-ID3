import React, {Component} from 'react';
// import { updateWidth } from '../../../actions/ScatterPlotActions'

class Dimensions extends Component {
  constructor(props){
    super(props);
    this.state = {
      checkbox: false
    };

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.controlWidth = this.props.controlWidth;
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.update_top = this.update_top.bind(this);
    this.update_bottom = this.update_bottom.bind(this);
    this.update_right = this.update_right.bind(this);
    this.update_left = this.update_left.bind(this);
    this.updateResponsive = this.updateResponsive.bind(this);
    // this.controlWidth = props.controlWidth.bind(this);
  }
<<<<<<< HEAD

=======

  onSubmit(event) {
    event.preventDefault();
  }

  handleCheckbox(event) {
    this.setState({
      checkbox: !this.state.checkbox
    });
  }

>>>>>>> workbranch
  updateWidth(e){
    this.setState({
      width: parseInt(e.target.value)
    })
  }
  updateHeight(e){
    this.setState({
      height: parseInt(e.target.value)
    })
  }
  update_top(e){
    console.log('--inside update_top');
    this.setState({
      top: parseInt(e.target.value)
    })
  }

  update_bottom(e){
    console.log('--inside bottom');
    this.setState({
      bottom: parseInt(e.target.value)
    })
  }
  update_right(e){
    console.log('--inside right');
    this.setState({
      right: parseInt(e.target.value)
    })
  }
  update_left(e){
    console.log('--inside left');
    this.setState({
      left: parseInt(e.target.value)
    })
  }
  updateResponsive(e){
    console.log('the responsive size value',e.target.checked)
    this.setState({
      responsiveSize: e.target.checked
    })
  }
   handleFormSubmit(e){
    console.log('--inside handleFormSubmit')
    e.preventDefault();
    console.log('---the new state, view component', this.state)
    this.controlWidth(this.state.width);
    // we can set
  }

  render(){

    // const margin = Object.keys(this.props.margin).map((attr, i) => {
    //   let func = 'update_'+ attr;
    //   return <div className="form-group" key={i}>
    //             <label>{attr}</label>
    //             <input key={i} type="text" className="form-control margin-input" placeholder={attr}  onChange={this[func]}></input>
    //           </div>
    // });

    let dimensionsDisplay = <div className="dimensions-display"></div>

    const top = <label>
                  Top:
                  <input type="text" className="form-control width-input" onChange={this.updateWidth} ></input>
                </label>

    const right = <label>
                  Right:
                  <input type="text" className="form-control width-input" onChange={this.updateWidth} ></input>
                </label>

    const bottom = <label>
                  Bottom:
                  <input type="text" className="form-control width-input" onChange={this.updateWidth} ></input>
                </label>

    const left = <label>
                  Left:
                  <input type="text" className="form-control width-input" onChange={this.updateWidth} ></input>
                </label>

    const width = <label>
                  Width:
                  <input type="text" className="form-control width-input" onChange={this.updateWidth} ></input>
                </label>

    const height = <label>
                  Height:
                  <input type="text" className="form-control height-input" onChange={this.updateHeight}></input>
                </label>
    const responsiveSize = <div className="checkbox">
                <label>
                  {/* this checkbox will still need it's own handler */}
                  <input type="checkbox"></input>
                  Responsive Resize
                </label>
            </div>

    if (this.state.checkbox) {
      dimensionsDisplay = <div className="dimensions-display">
        <div className="attr-input">
          {width}
          {height}
        </div>
        <h6 className="panel-headers">Margin</h6>
        <div className ="attr-input">
          {top}
          {right}
        </div>
        <div className ="attr-input">
          {bottom}
          {left}
        </div>
        {responsiveSize}
          <hr></hr>
      </div>
    }
    return(
      <div className="dimensions-container">
        <div className="checkbox">
          <form onSubmit={this.onSubmit}>
            <label>
              <input type="checkbox" onChange={this.handleCheckbox} checked={this.state.checkbox}></input>
              SVG Dimensions
            </label>
          </form>
        </div>
        {dimensionsDisplay}
      </div>
    );
  }
}

export default Dimensions;
