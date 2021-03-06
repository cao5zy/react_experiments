import React, { Component } from 'react';
import { connect } from 'react-redux'
import EditBox from './EditBox';
import EditBoxWithInput from './EditBoxWithInput';
import EditBoxWithObjBinding from './EditBoxWithObjBinding';
import * as _ from 'underscore';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {obj: {
	    name: 'alanx'
	}};
    }

  handleChange(event) {
    const { showAlert } = this.props;
    showAlert();
	this.setState((preState) => {
	    preState.obj[event.field] = event.value;
	    return preState;
	});
    }
    render() {
    const hello = function() {
	return [1, 2, 3];
    };

      console.log('props', this.props.alert);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
	    {_.map(hello(), n => n * 2) }
        </p>
	    <EditBox/>
	    <EditBoxWithInput value="hello from input"/>
	    <EditBoxWithObjBinding obj={this.state.obj} field='name' updateProp={this.handleChange}/>
	    <label>{this.state.obj.name}</label>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  console.log('mapStateToProps state', state);
  return {
    alert: state.reducer1.alert || "default alert"
  }
};

const mapDispatchToProps = (dispatch)=>{
  return {
    showAlert: ()=>{
      dispatch({type:"showMsg", data:{name:"alan"}});
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
