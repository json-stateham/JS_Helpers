const dispatchTable = {
  CREATE: (state, action) => {
    // modify state immutably
    return newState
  },
  DELETE: (state, action) => {
    // modify state immutably
    return newState
  },
  UPDATE: (state, action) => {
    // modify state immutably
    return newState
  }
}

const doAction = (state = initialState, action) =>
  dispatchTable[action.type] ? dispatchTable[action.type](state, action) : state
