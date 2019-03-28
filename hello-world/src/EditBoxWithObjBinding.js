import React, { Component } from 'react';

class EditBoxWithObjBinding extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    obj: props.obj,
	    field: props.field,
	    value: props.obj[props.field]
	};
    }
    render() {
	const val = this.state.value
	return (
	    <div>
		<label>Hello</label>
		<input type='text' value={val}></input>
            </div>
	);
  }
}

export default EditBoxWithObjBinding;
