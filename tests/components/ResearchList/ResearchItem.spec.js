import React from 'react'
import { shallow } from 'enzyme'
import ResearchItem from '../../../src/components/ResearchList/ResearchItem'
import ResearchDays from '../../../src/components/Date/ResearchDays'
import ResearchTitle from '../../../src/components/Title/ResearchTitle'
import ResearchExperiments from '../../../src/components/Experiments/ExperimentsList'
import entities from '../../store/ResearchEntitiesMocke'

describe('<ResearchItem />', () => {
  const researchItemComponent = <ResearchItem entity={entities[0]} />
  const researchDaysComponent = <ResearchDays dates={entities[0].getDates()} />
  const researchExperimentsComponent = <ResearchExperiments experiments={entities[0].getExperiments()} />
  const researchItem = shallow(researchItemComponent)

  it('<ResearchItem /> contains <ResearchTitle />', () => {
    expect(researchItem.contains(
      <ResearchTitle title={entities[0].getName()} />
    )).to.equal(true)
  })

  it('<ResearchItem /> contains <ResearchDays />', () => {
    expect(researchItem.contains(researchDaysComponent)).to.equal(true)
  })

  it('<ResearchItem /> contains <ResearchExperiments />', () => {
    expect(researchItem.contains(researchExperimentsComponent)).to.equal(true)
  })
})
