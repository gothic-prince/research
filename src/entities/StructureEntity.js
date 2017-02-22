import StructureEntityInterface from './StructureEntityInterface'
export default class PropEntity extends StructureEntityInterface {
  constructor (name, type) {
    super()
    this.name = name
    this.type = type
  }
  static TYPE_INTEGER () {
    return 1
  }
  static TYPE_BOOLEAN () {
    return 0
  }
  getType () {
    return this.type
  }
  getName () {
    return this.name
  }
}
