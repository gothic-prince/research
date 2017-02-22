import React from 'react'
import { shallow } from 'enzyme'
import ExperimentsProps from '../../../src/components/Experiments/ExperimentsProps'
import entities from '../../store/ResearchEntitiesMocke'

describe('<ExperimentsProps />', () => {
  const fisrtExperimentComponent = shallow(
    <ExperimentsProps arrayOfPropEntityInterface={entities[0].getExperiments()[0].getProps()} />
  )
  const secondExperimentComponent = shallow(
    <ExperimentsProps arrayOfPropEntityInterface={entities[0].getExperiments()[1].getProps()} />
  )
  const thirdExperimentComponent = shallow(
    <ExperimentsProps arrayOfPropEntityInterface={entities[1].getExperiments()[1].getProps()} />
  )
  it('Experiment is successful: Yes', () => {
    expect(fisrtExperimentComponent.text()).to.equal('Эксперимент прошёл удачно: Да')
  })
  it('Experiment is successful: No', () => {
    expect(secondExperimentComponent.text()).to.equal('Эксперимент прошёл удачно: Нет')
  })
  it('Experiment: Selection of Masily Kanicce', () => {
    expect(thirdExperimentComponent.text()).to.equal('Отпочкованно: 3Погибло: 0Мутация: Нет')
  })
})
