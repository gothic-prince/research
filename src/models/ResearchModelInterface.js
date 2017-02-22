export default class ResearchModelInterface {
  /**
   * @param id
   * @returns {ResearchEntityInterface}
   */
  getEntityById (id) {}
  /**
   * @returns {ResearchEntityInterface[]}
   */
  getEntities () {}
  /**
   * @param entity
   * @returns {ResearchModelInterface}
   */
  addEntity (entity) {}
  /**
   * @param entity
   * @returns {ResearchModelInterface}
   */
  updateEntity (entity) {}
  /**
   * @param entity
   * @returns {ResearchModelInterface}
   */
  removeEntity (entity) {}
  /**
   * @returns {boolean}
   */
  isFetch () {}
  /**
   * @returns {boolean}
   */
  isEmpty () {}
}
