import React from 'react'

class ResearchDays extends React.Component {
  getDays () {
    const dates = this.props.dates
    const created = dates[0]
    const willFinished = dates[dates.length - 1]
    return parseInt((willFinished - created) / 1000 / 60 / 60)
  }
  hasNotLimit () {
    const dates = this.props.dates
    return dates[dates.length - 1].getTime() !== dates[0].getTime()
  }
  render () {
    return (
      <span>
        { (this.hasNotLimit()) ? <span>Осталось дней: {this.getDays()}</span> : <span>Неогранич. срок</span> }
      </span>
    )
  }
}

ResearchDays.propTypes = {
  dates: React.PropTypes.array.isRequired
}

export default ResearchDays
