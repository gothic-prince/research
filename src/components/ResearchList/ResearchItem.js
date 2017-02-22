import React from 'react'
import ResearchEntityInterface from '../../entities/ResearchEntityInterface'
import ResearchDays from './ResearchDays'
import ResearchExperiments from './ResearchExperiments'
import ResearchTitle from '../ResearchView/ResearchTitle'

const ResearchItem = ({ entity }) => {
  /**
   * @type {ResearchEntityInterface}
   */
  const researchEntityInterface = entity
  return (
    <div>
      <ResearchTitle title={researchEntityInterface.getName()} />
      <div>
        <ResearchExperiments experiments={researchEntityInterface.getExperiments()} />
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
