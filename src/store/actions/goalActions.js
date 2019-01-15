
export const createGoal = (goal) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('Goals').add({
      ...goal,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_GOAL_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_GOAL_ERROR' }, err);
    });
  }
};