import React from 'react'

const ResearchDate = ({ time }) => {
  let date = new Date(time)
  return (
    <span>{ date.getDay() }.{ date.getMonth() }.{ date.getFullYear() }</span>
  )
}
ResearchDate.propTypes = {
  time: React.PropTypes.number.isRequired
}

export default ResearchDate
