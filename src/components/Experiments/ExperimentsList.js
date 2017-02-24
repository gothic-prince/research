import React from 'react'
import ExperimentEntityInterface from '../../entities/ExperimentEntityInterface'

const ExperimentsList = ({ experiments }) => {
  return (
    <span>Кол. экспериментов: {experiments.length}</span>
  )
}

ExperimentsList.propTypes = {
  experiments: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(ExperimentEntityInterface)
  )
}

export default ExperimentsList
