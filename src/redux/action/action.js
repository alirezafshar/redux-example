// action for redux version without toolkit

// method1: action with function
// function bugAdded (description)  {
//     return {
//         type: 'removeBug',
//         payload: {
//             description
//         }
//     }
// }

//method2: action with arrow function (preferred)
export const bugAdded = description => ({
    type: 'addBug',
    payload: {
        description
    }
})

export const bugUpdated = id => ({
    type: 'updateBug',
    payload: {
        id
    }
})

export const bugRemoved = id => ({
    type: 'removeBug',
    payload: {
        id
    }
})
