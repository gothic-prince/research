import React from 'react'
import { shallow } from 'enzyme'

import ResearchView from '../../../src/components/ResearchView/ResearchView'
import ResearchTitle from '../../../src/components/ResearchView/ResearchTitle'
import ResearchMembers from '../../../src/components/ResearchList/ResearchMembers'
import ExperimentsView from '../../../src/components/Experiments/ExperimentsView'
import entities from '../../store/ResearchEntitiesMocke'

describe('<ResearchView />', () => {
  const researchViewComponent = shallow(<ResearchView researchEntityInterface={entities[0]} />)

  it('<ResearchView /> contains <ResearchTitle />', () => {
    expect(researchViewComponent.contains(
      <ResearchTitle title={entities[0].getName()} />
    )).to.equal(true)
  })

  it('<ResearchView /> contains <ResearchMembers />', () => {
    expect(researchViewComponent.contains(
      <ResearchMembers members={entities[0].getMembers()} />
    )).to.equal(true)
  })

  it('<ResearchView /> contains <ExperimentsView />', () => {
    expect(researchViewComponent.contains(
      <ExperimentsView arrayOfExperimentEntityInterface={entities[0].getExperiments()} />
    )).to.equal(true)
  })

})