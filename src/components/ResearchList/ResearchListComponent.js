import React from 'react'
import { FetchResearch } from '../../actions/researchAction'
import ResearchEntityInterface from '../../entities/ResearchEntityInterface'
import ResearchItem from './ResearchItem'
import Members from './ResearchMembers'
class ResearchListComponent extends React.Component {
  componentDidMount () {
    this.props.dispatch(FetchResearch())
  }
  render () {
    /**
     * @type {ResearchEntityInterface[]}
     */
    let entities = this.props.entities
    return (
      <div>
        {entities.map((entity, key) => {
          return (
            <div key={key}>
              <hr />
              <ResearchItem entity={entity} />
              <Members title={'Участники:'} members={entity.getMembers()} />
              <hr />
            </div>
          )
        })}
      </div>
    )
  }
}

ResearchListComponent.propTypes = {
  entities: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(ResearchEntityInterface)
  ),
  dispatch: React.PropTypes.func
}

export default ResearchListComponent
