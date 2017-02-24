import React from 'react'
import { shallow } from 'enzyme'
import ExperimentsProps from '../../../src/components/Experiments/ExperimentsProps'
import ExperimentsPropsHeader from '../../../src/components/Experiments/ExperimentsPropsHeader'
import ExperimentsPropsBody from '../../../src/components/Experiments/ExperimentsPropsBody'
import entities from '../../store/ResearchEntitiesMocke'

describe('<ExperimentsProps />', () => {
  const fisrtExperimentComponent = shallow(
    <ExperimentsProps
      structures={entities[0].getStructures()}
      date={entities[0].getExperiments()[0].getDate()}
      datas={entities[0].getExperiments()[0].getProps()} />
  )

  it('<ExperimentsProps /> contains <ExperimentsPropsHeader />', () => {
    expect(fisrtExperimentComponent.contains(
      <ExperimentsPropsHeader structures={entities[0].getStructures()} />
    )).to.equal(true)
  })

  it('<ExperimentsProps /> contains <ExperimentsPropsBody />', () => {
    expect(fisrtExperimentComponent.contains(
      <ExperimentsPropsBody
        structure={entities[0].getStructures()}
        date={entities[0].getExperiments()[0].getDate()}
        datas={entities[0].getExperiments()[0].getProps()} />
    )).to.equal(true)
  })
})
