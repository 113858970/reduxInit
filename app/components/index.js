import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as createAction from '../action/action';
import AddTodo from '../components/addData'
let buttonStyle={
	marginRight:'20px'
}
class App extends Component {

	render (){
		const {c,a,b,data,filter,actions} = this.props
		const arr=[1,2,3]
		return (
			<div>
				<AddTodo
          onAddClick={text =>(actions.addData(text))} />
				<p>{c}</p>
				<p>{a}</p>
				<p><span>{data.a} + {data.b} + {data.c}</span></p>
				<button onClick={actions.increment} style={buttonStyle}>+</button>
				<button onClick={actions.decrement} style={buttonStyle}>-</button>
				<button onClick={actions.a_up} style={buttonStyle}>a_up</button>
				<button onClick={actions.allData} style={buttonStyle}>get data</button>
				<button onClick={actions.filterFalse} style={buttonStyle}>filterFalse</button>
				<button onClick={actions.filterTrue} style={buttonStyle}>filterTrue</button>
				<p>{
					arr.map((item, index) => {
						return item
					})

				}
        {
          '1' ? 'a' : 'b'
        }
				</p>
			</div>
		);
	}
}

const APP = connect((state) => {
  return {
    c:state.c,
    a:state.a,
    b:state.b,
    data: state.data,
    filter:state.filter,
  }
}, (dispatch) => {
	return {
		actions: bindActionCreators(createAction, dispatch)
	}
})(App)

export default APP;
