import React from 'react'
import { shallow } from 'enzyme'
import ResearchListComponent from '../../../src/components/ResearchList'
import ResearchItem from '../../../src/components/ResearchList/ResearchItem'
import ResearchMembers from '../../../src/components/ResearchList/ResearchMembers'
import entities from '../../store/ResearchEntitiesMocke'

describe('<ResearchListComponent />', () => {
  const research = shallow(<ResearchListComponent entities={entities} />)

  const researchItemComponent = <ResearchItem entity={entities[0]} />

  const researchMembersComponent = <ResearchMembers title={'Участники:'} members={entities[0].getMembers()} />

  it('<ResearchListComponent /> contains <ResearchItem />', () => {
    expect(research.contains(researchItemComponent)).to.equal(true)
  })
  it('<ResearchListComponent /> contains <ResearchMembers />', () => {
    expect(research.contains(researchMembersComponent)).to.equal(true)
  })
})

