import React from 'react'

const ResearchTitle = ({ title }) => {
  return <div>{title}</div>
}

ResearchTitle.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default ResearchTitle
