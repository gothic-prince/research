import React from 'react'
import ResearchTitle from './ResearchTitle'
import ResearchMembers from '../ResearchList/ResearchMembers'
import ExperimentsView from '../Experiments/ExperimentsView'
import ResearchEntityInterface from '../../entities/ResearchEntityInterface'
const ResearchView = ({ researchEntityInterface }) => {
  /**
   * @type {ResearchEntityInterface}
   */
  const entity = researchEntityInterface
  return (
    <div>
      <ResearchTitle title={entity.getName()} />
      <ResearchMembers members={entity.getMembers()} />
      <ExperimentsView arrayOfExperimentEntityInterface={entity.getExperiments()} />
    </div>
  )
}
ResearchView.propTypes = {
  researchEntityInterface: React.PropTypes.instanceOf(ResearchEntityInterface)
}
export default ResearchView
