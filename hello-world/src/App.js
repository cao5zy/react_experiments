import React, { Component } from 'react';
import { connect } from 'react-redux'
import EditBox from './EditBox';
import EditBoxWithInput from './EditBoxWithInput';
import EditBoxWithObjBinding from './EditBoxWithObjBinding';
import * as _ from 'underscore';
import logo from './logo.svg';
import './App.css';
import GridLayout from 'react-grid-layout';
import "./styles.css";



class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key="a" className="item">a</div>
        <div key="b" className="item">b</div>
        <div key="c" className="item">c</div>
      </GridLayout>
    )
  }
}

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
        <div>
          <p>grid layout</p>
          <div id="grid1-container">
            <MyFirstGrid/>
          </div>
        </div>
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
