import React, { Component } from 'react';

class EditBoxWithObjBinding extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    obj: props.obj,
	    field: props.field,
	    value: props.obj[props.field]
	};
	this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
	this.setState({value: event.target.value})
	const updateProp = this.props.updateProp;
	
	updateProp({obj:this.props.obj, field: this.props.field, value: event.target.value});
    }
    render() {
	const val = this.state.value;
	return (
	    <div>
		<label>Hello</label>
		<input type='text' value={val} onChange={this.handleChange}></input>
            </div>
	);
  }
}

export default EditBoxWithObjBinding;
