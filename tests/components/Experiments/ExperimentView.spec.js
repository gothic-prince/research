import React from 'react'
import { shallow } from 'enzyme'
import ExperimentsView from '../../../src/components/Experiments/ExperimentsView'
import ExperimentsProps from '../../../src/components/Experiments/ExperimentsProps'
import entities from '../../store/ResearchEntitiesMocke'

describe('<ExperimentsView />', () => {
  const researchViewComponent = shallow(
    <ExperimentsView
      structures={entities[0].getStructures()}
      experiments={entities[0].getExperiments()} />
  )

  it('<ExperimentsView /> contains <ExperimentsProps />', () => {
    expect(researchViewComponent.contains(
      <ExperimentsProps
        date={entities[0].getExperiments()[0].getDate()}
        structures={entities[0].getStructures()}
        datas={entities[0].getExperiments()[0].getProps()} />
    )).to.equal(true)
  })
})
