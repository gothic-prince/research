import React from 'react'
import ResearchTitle from '../components/Title/ResearchTitle'
import ResearchMembers from '../components/Members/ResearchMembers'
import ExperimentsView from '../components/Experiments/ExperimentsView'
import ResearchEntityInterface from '../entities/ResearchEntityInterface'
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
