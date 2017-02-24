import React from 'react'
import StructureEntityInterface from '../../entities/StructureEntityInterface'
import ResearchDate from '../Date/ResearchDate'
class ExperimentsPropsBody extends React.Component {
  getValue (type, value) {
    switch (type) {
      case 0:
        if (value) {
          return 'Да'
        }
        return 'Нет'
      case 10:
        return <ResearchDate time={value} />
      default:
        return value
    }
  }
  render () {
    this.props.datas.unshift(this.props.date.getTime())
    /**
     * @type {StructureEntityInterface[]}
     */
    const structures = this.props.structure
    return (
      <div>
        {
          this.props.datas.map((value, key) => {
            return <span key={key}>
              {this.getValue(((key - 1) >= 0 ? structures[key - 1].getType() : 10), value)}
            </span>
          })
        }
      </div>
    )
  }
}


ExperimentsPropsBody.propTypes = {
  datas: React.PropTypes.array.isRequired,
  date: React.PropTypes.instanceOf(Date).isRequired,
  structure: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(StructureEntityInterface)
  ).isRequired
}
export default ExperimentsPropsBody
