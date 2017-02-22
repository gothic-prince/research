import ExperimentEntityInterface from './ExperimentEntityInterface'

export default class ExperimentEntity extends ExperimentEntityInterface {
  constructor (comment, date, props) {
    super()
    this.comment = comment
    this.date = date
    this.props = props
  }
  getComment () {
    return this.comment
  }
  /**
   * @returns {Date}
   */
  getDate () {
    return this.date
  }
  /**
   * @returns {PropEntityInterface[]}
   */
  getProps () {
    return this.props
  }
}
