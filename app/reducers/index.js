const init = {a:0, b:'b', c: 0, data: {a: 0, b: 'b', c: 0},add:[],filter:[]}
let nextTodoId = 0
const todoReducer = (state = init, action)=> {
	if(action.type === 'INCREMENT'){
		return Object.assign({}, state, {c: state.c + 1});
	}else if (action.type === 'DECREMENT'){
		return Object.assign({}, state, {c: state.c - 1});
	}else if(action.type == 'A_UP'){
    return Object.assign({}, state,{a:state.a+2});
  }else if (action.type == 'ALLDATA') {
    return Object.assign({}, state, {data: {a: state.a, b: state.b, c: state.c}})
  }else if(action.type == 'ADDDATA'){
    const add = state.add;
    add.push({text: action.text,completed: false,id:action.id});
    return Object.assign({}, state, {add})
  }
  // else if (action.type == 'FFALSE') {
  //   const filter = state.filter;
  //   const filterData =[];
  //   state.add.filter((item) => {
  //     if(item.completed === false){
  //       filterData.push(item)
  //     }
  //   })
  //   return Object.assign({}, state, {filter:filterData})
  // }
  else if(action.type == 'FFALSE'){
    const filter = state.add.filter((item) => {
      return item.completed === false;
    })
    return Object.assign({}, state, {filter})
  }
  else{
		return state;
	}
}

export default todoReducer;
