import React, {Component} from 'react';
// import { updateWidth } from '../../../actions/ScatterPlotActions'

export default class Dimensions extends Component {
  constructor(props){
    super(props);
    this.state={};

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
    // console.log('--inside handleFormSubmit')
    // e.preventDefault();
    // if(e.which === 13){
    // this.controlWidth(this.state.width);
    // }
    
  console.log('--inside handleFormSubmit')
    e.preventDefault();
    this.controlWidth(this.state.width);
  }

  render(){
    const margin = Object.keys(this.props.margin).map((attr, i) => {
      let func = 'update_'+ attr;
      return <div className="form-group" key={i}>
                <label>{attr}</label>
                <input key={i} type="text" className="form-control margin-input" placeholder={attr}  onChange={this[func]}></input>
              </div>
    });


    const width = <div className="form-group" key={0}>
                <label>width</label>
                <input key={0} type="text" className="form-control width-input"  placeholder="width" onChange={this.updateWidth} ></input>
              </div>;

    const height = <div className="form-group" key={1}>
                <label>height</label>
                <input key={1} type="text" className="form-control height-input"  placeholder="height" onChange={this.updateHeight}></input>
              </div>;
    const responsiveSize =   <div className="form-group" key={2}>
                <label>Responsive Resize</label>
                <input key={2} type="checkbox" className="form-control reSize-input" onChange={this.updateResponsive}></input>
              </div>;         
    return(
      <div className="dimensions">
        <h5 className="panel-headers">SVG Dimensions</h5>
        <h6 className="panel-headers">Margin</h6>
        <form onSubmit={this.handleFormSubmit} >
          <hr/>
              {margin}
              {width}
              {height}
              {responsiveSize}
        <input
					type="submit"
					className="dimensions-submit"
					value="Submit"/>      
        </form>
      </div>
    );
  }

}

