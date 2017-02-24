import React from 'react'
import ResearchTitle from '../Title/ResearchTitle'
import ResearchMembers from '../Members/ResearchMembers'
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
      <ExperimentsView
        experiments={entity.getExperiments()}
        structures={entity.getStructures()} />
    </div>
  )
}
ResearchView.propTypes = {
  researchEntityInterface: React.PropTypes.instanceOf(ResearchEntityInterface)
}
export default ResearchView
