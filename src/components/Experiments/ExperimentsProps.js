import React from 'react'
import StructureEntityInterface from '../../entities/StructureEntityInterface'
class ExperimentsProps extends React.Component {
  getValue (type, value) {
    if (type === 0) {
      if (value) {
        return 'Да'
      }
      return 'Нет'
    }
    return value
  }
  render () {
    /**
     * @type {StructureEntityInterface[]}
     */
    const structures = this.props.structures
    const datas = this.props.datas

    return (
      <ul>
        {
          structures.map((structure, key) => {
            return <li key={key}>
              <div>{structure.getName()}: {this.getValue(structure.getType(), datas[key])}</div>
            </li>
          })
        }
      </ul>
    )
  }
}

ExperimentsProps.propTypes = {
  structures: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(StructureEntityInterface).isRequired
  ),
  datas: React.PropTypes.array.isRequired
}

export default ExperimentsProps
