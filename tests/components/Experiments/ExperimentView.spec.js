import React from 'react'
import { shallow } from 'enzyme'
import ExperimentsView from '../../../src/components/Experiments/ExperimentsView'
import ExperimentsProps from '../../../src/components/Experiments/ExperimentsProps'
import entities from '../../store/ResearchEntitiesMocke'

describe('<ExperimentsView />', () => {
  const researchViewComponent = shallow(
    <ExperimentsView arrayOfExperimentEntityInterface={entities[0].getExperiments()} />
  )

  it('<ExperimentsView /> contains <ExperimentsProps />', () => {
    expect(researchViewComponent.contains(
      <ExperimentsProps arrayOfPropEntityInterface={entities[0].getExperiments()[0].getProps()} />
    )).to.equal(true)
  })

})
