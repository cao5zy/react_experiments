import React, { Component } from 'react';

class EditBox extends Component {
    constructor(props) {
	super(props);
	this.state = { value: 'hello world'};
    }    
    render() {
	const val = this.state.value;
	return (
	    <div>
		<label>Hello</label>
		<input type='text' value={val}></input>
            </div>
	);
  }
}

export default EditBox;
