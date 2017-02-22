import React from 'react'
import ExperimentEntityInterface from '../../entities/ExperimentEntityInterface'
import ExperimentsProps from './ExperimentsProps'
const ExperimentsView = ({ arrayOfExperimentEntityInterface }) => {
  /**
   * @type {ExperimentEntityInterface[]}
   */
  const experiments = arrayOfExperimentEntityInterface
  return (
    <div>
      {experiments.map((experiment, key) => {
        return (
          <div key={key}>
            <div>
              {experiment.getDate().getDay()}.{experiment.getDate().getMonth()}.{experiment.getDate().getFullYear()}
            </div>
            <div>{experiment.getComment()}</div>
            <ExperimentsProps arrayOfPropEntityInterface={experiment.getProps()} />
          </div>
        )
      })}
    </div>
  )
}
ExperimentsView.propTypes = {
  arrayOfExperimentEntityInterface: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(ExperimentEntityInterface)
  )
}

export default ExperimentsView
