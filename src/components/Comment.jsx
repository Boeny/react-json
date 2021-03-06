/** @namespace components */

import React from 'react'
import PropTypes from 'prop-types'

const fields = ['id', 'name', 'email', 'body']

function Comment (props) {
  const row = props.data

  return (
    <div className='comment'>
      { fields.map(f => <div key={row.id + f} className={f}>{ row[f] }</div>) }
    </div>
  )
}

Comment.defaultProps = {
  data: {}
}

Comment.propTypes = {
  data: PropTypes.object
}

export default Comment
