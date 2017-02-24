import React from 'react'
const Members = ({ members, title }) => {
  return (
    <div>
      <div>{title}</div>
      <div>
        {members.map((member, key) => {
          return (
            <span key={key} style={{
              border: '1px solid black',
              margin: '1px',
              width: '50px',
              height: '50px',
              display: 'inline-block'

            }} />
          )
        })}
      </div>
    </div>
  )
}
Members.propTypes = {
  members: React.PropTypes.array.isRequired,
  title: React.PropTypes.string
}
export default Members
