import React from 'react'
import { shallow } from 'enzyme'
import entities from '../../store/ResearchEntitiesMocke'
import ResearchDays from '../../../src/components/Date/ResearchDays'

describe('<ResearchDays />', () => {
  const researchDaysComponent = <ResearchDays dates={entities[0].getDates()} />
  const researchDaysComponent2 = <ResearchDays dates={entities[2].getDates()} />
  const researchDays = shallow(researchDaysComponent)
  it('Expiration: 30 day', () => {
    expect(researchDays.text()).to.equal('Осталось дней: 30')
  })
  it('No limiting', () => {
    expect(shallow(researchDaysComponent2).text()).to.equal('Неогранич. срок')
  })
})

