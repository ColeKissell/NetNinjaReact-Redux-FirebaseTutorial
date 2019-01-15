import React from 'react'
import GoalSummary from './GoalSummary'
import {Link} from 'react-router-dom'


const GoalList = ({goals}) => {
    return (
        <div className="project-list section">
            { goals && goals.map(goal => {
        return (
            <Link to={`/goal/${goal.id}`} key={goal.id}>
                <GoalSummary goal={goal}  />
            </Link>
        )
      })} 
        </div>
    )
}

export default GoalList