import React from 'react'
import ExperimentEntityInterface from '../../entities/ExperimentEntityInterface'
import StructureEntityInterface from '../../entities/StructureEntityInterface'
import ExperimentsProps from './ExperimentsProps'
const ExperimentsView = (props) => {
  /**
   * @type {ExperimentEntityInterface[]}
   */
  const experiments = props.experiments

  return (
    <div>
      {experiments.map((experiment, key) => {
        return (
          <div key={key}>
            <div>
              {experiment.getDate().getDay()}.{experiment.getDate().getMonth()}.{experiment.getDate().getFullYear()}
            </div>
            <div>{experiment.getComment()}</div>
            <ExperimentsProps
              date={experiment.getDate()}
              datas={experiment.getProps()}
              structures={props.structures} />
          </div>
        )
      })}
    </div>
  )
}
ExperimentsView.propTypes = {
  experiments: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(ExperimentEntityInterface).isRequired
  ),
  structures: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(StructureEntityInterface).isRequired
  )
}

export default ExperimentsView
