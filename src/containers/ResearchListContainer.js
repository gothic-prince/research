import { connect } from 'react-redux'
import ResearchListComponent from './ResearchListComponent'

const stateToProps = (state) => {
  /**
   * @type {ResearchModelInterface}
   */
  let model = state.research
  return {
    entities: model.getEntities(),
    isFetch: model.isFetch()
  }
}

const dispatchToProps = null

export default connect(stateToProps, dispatchToProps)(ResearchListComponent)
