import React from 'react'
import { shallow } from 'enzyme'
import ExperimentsPropsBody from '../../../src/components/Experiments/ExperimentsPropsBody'
import ResearchDate from '../../../src/components/Date/ResearchDate'
import entities from '../../store/ResearchEntitiesMocke'

describe('<ExperimentsPropsBody />', () => {
  describe('First research', () => {
    let entity = entities[0]
    const experiment = shallow(
      <ExperimentsPropsBody
        structure={entity.getStructures()}
        date={entity.getExperiments()[0].getDate()}
        datas={entity.getExperiments()[0].getProps()} />
    )

    it('Structure: 2 column', () => {
      expect(experiment.find('span')).to.have.length(2)
    })

    it('First column contains text "Date"', () => {
      expect(experiment.find('span').at(0).contains(
        <ResearchDate time={entity.getExperiments()[0].getProps()[0]} />
      )).to.equal(true)
    })

    it('Second column contains text "Experiment is successful"', () => {
      expect(experiment.find('span').at(1).text()).to.equal('Да')
    })
  })

  describe('Second research', () => {
    let entity = entities[1]
    function SecondResearch(researchName, gemmation, left, mutation, experimentIndex) {
      describe(researchName, () => {
        const experiment = shallow(
          <ExperimentsPropsBody
            structure={entity.getStructures()}
            date={entity.getExperiments()[experimentIndex].getDate()}
            datas={entity.getExperiments()[experimentIndex].getProps()} />
        )
        it('Structure: 4 column', () => {
          expect(experiment.find('span')).to.have.length(4)
        })
        it('Date is right', () => {
          expect(experiment.find('span').at(0).contains(
            <ResearchDate time={entity.getExperiments()[experimentIndex].getProps()[0]} />
          )).to.equal(true)
        })
        it('Gemmation: ' + gemmation, () => {
          expect(experiment.find('span').at(1).text()).to.equal(gemmation.toString())
        })
        it('Left: ' + left, () => {
          expect(experiment.find('span').at(2).text()).to.equal(left.toString())
        })
        it('Mutation: ' + (mutation === 'Нет' ? 'No' : 'Yes'), () => {
          expect(experiment.find('span').at(3).text()).to.equal(mutation)
        })
      })
    }
    SecondResearch('First experiment', 0, 0, 'Нет', 0)
    SecondResearch('Second experiment', 3, 0, 'Нет', 1)
    SecondResearch('Thrid experiment', 8, 1, 'Нет', 2)
    SecondResearch('4th experiment', 23, 4, 'Нет', 3)
    SecondResearch('5th experiment', 71, 46, 'Да', 4)
  })
})
