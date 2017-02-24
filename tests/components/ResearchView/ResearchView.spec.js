import React from 'react'
import { shallow } from 'enzyme'

import ResearchView from '../../../src/components/ResearchView/ResearchView'
import ResearchTitle from '../../../src/components/Title/ResearchTitle'
import ResearchMembers from '../../../src/components/Members/ResearchMembers'
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
      <ExperimentsView
        structures={entities[0].getStructures()}
        experiments={entities[0].getExperiments()} />
    )).to.equal(true)
  })
})
