// this is like bugSlice reducer without using @reduxjs/toolkit
// it is only for reference to how run reducer version without toolkit

let bugId = 0

const reducer = (state = [], action) => {
    switch(action.type) {
        case('addBug'):
        return [
            ...state,
            {
                id: bugId++,
                description: action.payload.description,
                resolve: false
            }
        ]
        case ('updateBug'):
        return state.map((bug) => bug.id === action.payload.id ? {...state, resolve: true}: bug)
        case ('removeBug'):
        return state.filter((bug) => bug.id !== action.payload.id)
        default: 
        return state
    }
}

export default reducer