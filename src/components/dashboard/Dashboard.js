
import React, { Component } from 'react'
import GoalList from '../goals/GoalList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {
  render() {



    const { goals, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <GoalList goals={goals} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  // console.log(state);
  return {
    goals: state.firestore.ordered.Goals,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'Goals', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Dashboard)