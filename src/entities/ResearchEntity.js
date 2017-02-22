import ResearchEntityInterface from './ResearchEntityInterface'

class ResearchEntity extends ResearchEntityInterface {
  constructor (experiment, name, members, dates, structures, id) {
    super()
    this.dates = []
    dates.map((date) => {
      this.dates.push(new Date(date))
    })
    this.experiment = experiment
    this.name = name
    this.members = members
    this.structures = structures
    this.id = id
  }
  getName () {
    return this.name
  }
  /**
   * @returns {ExperimentEntityInterface[]}
   */
  getExperiments () {
    return this.experiment
  }
  getMembers () {
    return this.members
  }
  getDates () {
    return this.dates
  }
  getId () {
    return this.id
  }
  getStructures () {
    return this.structures
  }
}

export default ResearchEntity
