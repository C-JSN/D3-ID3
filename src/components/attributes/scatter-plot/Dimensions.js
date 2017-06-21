import React, {Component} from 'react';
import AttributeInput from '../AttributeInput';

class Dimensions extends Component {
  constructor(props){
    super(props);
    this.state = {
      checkbox: false
    };

    //passing action creators
    this.controlWidth = this.props.controlWidth;
    this.controlHeight = this.props.controlHeight;
    this.controlTop = this.props.controlTop;
    this.controlBottom = this.props.controlBottom;

    //binding component methods
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

  }

  onSubmit(event) {
    event.preventDefault();
  }

  handleCheckbox(event) {
    this.setState({
      checkbox: !this.state.checkbox
    });
  }

  updateWidth(e){
    e.preventDefault();
    this.setState({
      width: parseInt(e.target.value) || ''
    })
  }
  updateHeight(e){
    this.setState({
      height: parseInt(e.target.value)
    })
  }
  update_top(e){

    // this.setState({
    //   margin: {
    //     top: parseInt(e.target.value)
    //   }
    // })

    this.setState({
      margin:{
        ...this.state.margin,
        top: parseInt(e.target.value)
      }
    })
  }

  update_bottom(e){

    // this.setState({
    //  margin: {
    //     bottom: parseInt(e.target.value)
    //   }
    // })
    this.setState({
      margin:{
        ...this.state.margin,
        bottom: parseInt(e.target.value)
      }
    })

  }
  update_right(e){
    this.setState({
      right: parseInt(e.target.value)
    })
  }
  update_left(e){
    this.setState({
      left: parseInt(e.target.value)
    })
  }
  updateResponsive(e){

    this.setState({
      responsiveSize: e.target.checked
    })
  }

  //When user hits enter action creators are called with all the user inputs
   handleFormSubmit(e){

    if (e.which === 13) {
      console.log('this is the local state passed', this.state);

      if(this.state.margin && this.state.margin.top){
        this.controlTop(this.state.margin.top);
      }
      if(this.state.margin && this.state.margin.bottom){
        this.controlBottom(this.state.margin.bottom);
      }

      if(this.state.width){
        this.controlWidth(this.state.width);
      }
      if(this.state.height){
        this.controlHeight(this.state.height);
      }
    }
  }

  render(){
    let dimensionsDisplay = <div className="attr-display"></div>

    const responsiveSize = <div className="checkbox">
                <label style={{color: '#CACFD2'}}>
                  {/* this checkbox will still need it's own handler */}
                  <input type="checkbox" />
                  responsive resize
                </label>
            </div>

    if (this.state.checkbox) {
      dimensionsDisplay = <div className="attr-display">
        <div className="input-group">
            <AttributeInput label='width' type='number' handler={this.updateWidth} />
            <AttributeInput label='height' type='number' handler={this.updateHeight} />
        </div>
        <h6 className="panel-subheaders">Margin</h6>
        <div className="input-group">
            <AttributeInput label='top' type='number' handler={this.update_top} />
            <AttributeInput label='right' type='number' handler={this.update_right} />
        </div>
        <div className="input-group">
            <AttributeInput label='bottom' type='number' handler={this.update_bottom} />
            <AttributeInput label='left' type='number' handler={this.update_left} />
        </div>
        {responsiveSize}
      </div>
    }
    return(
      <div>
        <div className="attr-container">
          <div onClick={this.handleCheckbox} checked={this.state.checkbox}>
            <h5 className="panel-headers">SVG Dimensions</h5>
          </div>
          <form onKeyUp={this.handleFormSubmit}>
            {dimensionsDisplay}
          </form>
        </div>
      </div>
    );
  }
}

export default Dimensions;
