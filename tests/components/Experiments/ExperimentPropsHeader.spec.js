import React from 'react'
import { shallow } from 'enzyme'
import ExperimentsPropsHeader from '../../../src/components/Experiments/ExperimentsPropsHeader'
import entities from '../../store/ResearchEntitiesMocke'

describe('<ExperimentsPropsHeader />', () => {
  describe('First experiment', () => {
    const experiment = shallow(
      <ExperimentsPropsHeader structures={entities[0].getStructures()} />
    )
    it('Structure: 2 column', () => {
      expect(experiment.find('span')).to.have.length(2)
    })
    it('First column contains text "Date"', () => {
      expect(experiment.find('span').at(0).text()).to.equal('Дата')
    })
    it('Second column contains text "Experiment is successful"', () => {
      expect(experiment.find('span').at(1).text()).to.equal('Эксперимент прошёл удачно')
    })
  })

  describe('Second experiment', () => {
    const experiment = shallow(
      <ExperimentsPropsHeader structures={entities[1].getStructures()} />
    )
    it('Structure: 4 column', () => {
      expect(experiment.find('span')).to.have.length(4)
    })
    it('Column #1 contains text "Date"', () => {
      expect(experiment.find('span').at(0).text()).to.equal('Дата')
    })
    it('Column #2 contains text "Gemmation"', () => {
      expect(experiment.find('span').at(1).text()).to.equal('Отпочкованно')
    })
    it('Column #3 contains text "Left"', () => {
      expect(experiment.find('span').at(2).text()).to.equal('Погибло')
    })
    it('Column #4 contains text "Mutation"', () => {
      expect(experiment.find('span').at(3).text()).to.equal('Мутация')
    })
  })

  describe('Third experiment', () => {
    const experiment = shallow(
      <ExperimentsPropsHeader structures={entities[2].getStructures()} />
    )
    it('Structure: 2 column', () => {
      expect(experiment.find('span')).to.have.length(2)
    })
    it('First column contains text "Date"', () => {
      expect(experiment.find('span').at(0).text()).to.equal('Дата')
    })
    it('Second column contains text "Diameter"', () => {
      expect(experiment.find('span').at(1).text()).to.equal('Диаметр гороха')
    })
  })
})
