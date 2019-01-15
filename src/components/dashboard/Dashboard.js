
import React, { Component } from 'react'
import GoalList from '../goals/GoalList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'



class Dashboard extends Component {
  render() {



    const { goals } = this.props;


    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <GoalList goals={goals} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    
    goals: state.firestore.ordered.Goals
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'Goals' }
  ])
)(Dashboard)