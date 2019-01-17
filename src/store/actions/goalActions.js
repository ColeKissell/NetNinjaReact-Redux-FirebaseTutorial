
export const createGoal = (goal) => {
  return (dispatch, getState, {getFirestore, getFirebase}) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('Goals').add({
      ...goal,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_GOAL_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_GOAL_ERROR' }, err);
    });
  }
};