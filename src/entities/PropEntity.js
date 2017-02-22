import PropEntityInterface from './PropEntityInterface'
export default class PropEntity extends PropEntityInterface {
  constructor (name, value, type = 0) {
    super()
    this.name = name
    this.value = value
    this.type = type
  }
  getType () {
    return this.type
  }
  getName () {
    return this.name
  }
  getValue () {
    return this.value
  }
}
