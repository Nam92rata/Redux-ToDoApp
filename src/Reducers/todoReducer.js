const initialState = {
    todo:[],
    filter:'All'
    
}
const todoReducer = (state=initialState, action)=>{
    console.log(action, state);
    switch(action.type){
        case "ADD_TODO":
            return Object.assign({}, state, {
                todo:[...state.todo,
                    {text:action.text, check:false, id: action.id}
                ]
            }
            )            
        case 'SET_FILTER': 
            console.log(state.filter,action.filter)
            return Object.assign({}, state, {
                filter : action.filter
            }
            )         
        
        case 'TOGGLE_TODO':                  
            console.log("Toggledffffffffff",state.todo,action.id)   
            state.todo.map(el=>{                    
                if(el.id == action.id){                        
                    return(el.check = ! el.check)
                }
            })

                   
        default:
            return state;
    }
}

export default todoReducer;