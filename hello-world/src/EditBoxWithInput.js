import React, { Component } from 'react';

class EditBoxWithInput extends Component {

    render() {
	const val = this.props.value
	return (
	    <div>
		<label>Hello</label>
		<input type='text' value={val}></input>
            </div>
	);
  }
}

export default EditBoxWithInput;
