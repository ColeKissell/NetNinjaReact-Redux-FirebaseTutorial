import React from 'react'
import GoalSummary from './GoalSummary'



const GoalList = ({goals}) => {
    return (
        <div className="project-list section">
            { goals && goals.map(goal => {
        return (
          <GoalSummary goal={goal} key={goal.id} />
        )
      })} 
        </div>
    )
}

export default GoalList