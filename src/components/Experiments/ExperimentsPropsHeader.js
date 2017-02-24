import React from 'react'
import StructureEntityInterface from '../../entities/StructureEntityInterface'

const ExperimentsPropsHeader = ({ structures }) => {
  /**
   * @type {StructureEntityInterface[]}
   */
  const entities = structures
  return (
    <div>
      <span>Дата</span>
      {
        entities.map((structure, key) => {
          return <span key={key}>{structure.getName()}</span>
        })
      }
    </div>
  )
}

ExperimentsPropsHeader.propTypes = {
  structures: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(StructureEntityInterface)
  )
}
export default ExperimentsPropsHeader
