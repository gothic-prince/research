import ResearchModelInterface from './ResearchModelInterface'
import ResearchEntity from '../entities/ResearchEntity'
import ExperimentEntity from '../entities/ExperimentEntity'
export default class ResearchModel extends ResearchModelInterface {
  constructor (arrayEntities, fetch) {
    super()

    this.entities = []
    arrayEntities.map((entity) => {
      let experiments = []
      entity.experiment.map((experiment) => {
        experiments.push(
          new ExperimentEntity(
            experiment.comment,
            experiment.date,
            experiment.props,
            experiment.id
          )
        )
      })

      this.entities.push(new ResearchEntity(
        experiments,
        entity.name,
        entity.members,
        entity.dates
      ))
    })
    this.fetch = fetch
  }
  /**
   * @param id
   * @returns {ResearchEntityInterface}
   */
  getEntityById (id) {
    let entity = this.getEntities().find((entity) => {
      return entity.getId() === id
    })
    if (entity) {
      return entity
    }
    return null
  }
  /**
   * @returns {ResearchEntityInterface[]}
   */
  getEntities () {
    return this.entities
  }
  addEntity (entity) {
    this.entities.push(entity)
  }
  updateEntity (entity) {

  }
  removeEntity (entity) {

  }
  isFetch () {
    return this.fetch
  }
  isEmpty () {
    return this.entities.length() === 0
  }
}
