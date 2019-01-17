import React from 'react'
import moment from 'moment'


const GoalSummary = ({goal}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{goal.title}</span>
        <p>Posted by {goal.authorFirstName} {goal.authorLastName}</p>
        <p className="grey-text">{moment( goal.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default GoalSummary