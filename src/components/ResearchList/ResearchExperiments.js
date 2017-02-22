import React from 'react'
import ExperimentEntityInterface from '../../entities/ExperimentEntityInterface'

const ResearchExperiments = ({ experiments }) => {
  return (
    <span>Кол. экспериментов: {experiments.length}</span>
  )
}

ResearchExperiments.propTypes = {
  experiments: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(ExperimentEntityInterface)
  )
}

export default ResearchExperiments
