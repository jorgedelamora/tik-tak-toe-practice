import React from 'react'

const Spacer = ({x, y}) => {

    const margin = `${y ? y + 'rem' : ''} ${x ? x + 'rem' : ''} `;

  return (
    <div style={{margin}} />
  )
}

export default Spacer