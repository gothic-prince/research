import { RECEIVE_RESEARCH } from '../actions/researchAction'
import ResearchModel from '../models/ResearchModel'

export default function ResearchReducer (state = new ResearchModel([], false), action) {
  switch (action.type) {
    case RECEIVE_RESEARCH:
      return new ResearchModel(action.entities, true)
    default:
      return state
  }
}
