import React from 'react'
import { shallow } from 'enzyme'
import entities from '../../store/ResearchEntitiesMocke'
import ResearchExperiments from '../../../src/components/ResearchList/ResearchExperiments'

describe('<ResearchExperiments />', () => {
  const researchExperimentsComponent = <ResearchExperiments experiments={entities[0].getExperiments()} />
  const researchExperiments = shallow(researchExperimentsComponent)

  it('Qty. experiments: 2', () => {
    expect(researchExperiments.text()).to.equal('Кол. экспериментов: 2')
  })
})
