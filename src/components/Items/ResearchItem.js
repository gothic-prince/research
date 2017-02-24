import React from 'react'
import ResearchEntityInterface from '../../entities/ResearchEntityInterface'
import ResearchDays from '../Date/ResearchDays'
import ExperimentsList from '../Experiments/ExperimentsList'
import ResearchTitle from '../Title/ResearchTitle'

const ResearchItem = ({ entity }) => {
  /**
   * @type {ResearchEntityInterface}
   */
  const researchEntityInterface = entity
  return (
    <div>
      <ResearchTitle title={researchEntityInterface.getName()} />
      <div>
        <ExperimentsList experiments={researchEntityInterface.getExperiments()} />
        <span> | </span>
        <ResearchDays dates={researchEntityInterface.getDates()} />
      </div>
    </div>
  )
}

ResearchItem.propTypes = {
  entity: React.PropTypes.instanceOf(ResearchEntityInterface)
}

export default ResearchItem
