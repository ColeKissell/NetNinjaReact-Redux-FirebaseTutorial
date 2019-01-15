const initState = {
    goals: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
}

const goalReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_GOAL_SUCCESS':
        console.log('create goal success', action.goal);
        return state;
      case 'CREATE_GOAL_ERROR':
        console.log('create goal error', action.err);
        return state;
      default:
        return state;
    }
  };

  
export default goalReducer;