let nextTodoId = 0
export function increment() {
  return { type: 'INCREMENT' }
}

export function decrement() {
  return { type: 'DECREMENT' }
}

export function a_up(){
  return { type: 'A_UP' }
}

export function allData(){
  return { type: 'ALLDATA' }
}


export function addData(text){
  return {
    type: 'ADDDATA',
    id: nextTodoId++,
    text
  }
}

export function filterFalse(){
  return{
    type:'FFALSE'
  }
}

export function filterTrue(){
  return{
    type:'FTRUE'
  }
}
