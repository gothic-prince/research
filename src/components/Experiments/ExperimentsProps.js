import React from 'react'
import ExperimentsPropsHeader from './ExperimentsPropsHeader'
import ExperimentsPropsBody from './ExperimentsPropsBody'
import StructureEntityInterface from '../../entities/StructureEntityInterface'
class ExperimentsProps extends React.Component {
  render () {
    const structures = this.props.structures
    const datas = this.props.datas
    return (
      <div>
        <ExperimentsPropsHeader
          structures={structures} />
        <ExperimentsPropsBody
          structure={structures}
          date={this.props.date}
          datas={datas} />
      </div>
    )
  }
}

ExperimentsProps.propTypes = {
  structures: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(StructureEntityInterface).isRequired
  ),
  datas: React.PropTypes.array.isRequired,
  date: React.PropTypes.instanceOf(Date).isRequired
}

export default ExperimentsProps
