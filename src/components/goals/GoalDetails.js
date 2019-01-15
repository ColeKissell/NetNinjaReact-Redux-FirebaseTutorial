import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


const GoalDetails = (props) => {
  const { goal, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (goal) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{goal.title}</span>
            <p>{goal.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {goal.authorFirstName} {goal.authorLastName}</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading goal...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const id = ownProps.match.params.id;
  const goals = state.firestore.data.Goals;
  const goal = goals ? goals[id] : null
  return {
    goal: goal,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'Goals'
  }])
)(GoalDetails)
