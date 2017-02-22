import React from 'react'
import PropEntityInterface from '../../entities/PropEntityInterface'
class ExperimentsProps extends React.Component {
  /**
   * @param propEntity {PropEntityInterface}
   */
  getValue (propEntity) {
    if (propEntity.getType() === 0) {
      if (propEntity.getValue()) {
        return 'Да'
      }
      return 'Нет'
    }
    return propEntity.getValue()
  }
  render () {
    /**
     * @type {PropEntityInterface[]}
     */
    const propEntities = this.props.arrayOfPropEntityInterface
    return (
      <ul>
        {
          propEntities.map((propEntity, key) => {
            return <li key={key}>
              <div>{propEntity.getName()}: {this.getValue(propEntity)}</div>
            </li>
          })
        }
      </ul>
    )
  }
}


ExperimentsProps.propTypes = {
  arrayOfPropEntityInterface: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(PropEntityInterface)
  )
}

export default ExperimentsProps
