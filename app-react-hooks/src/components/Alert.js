import React from 'react'

export const Alert = (props) => {

  return (
    <div class={`alert alert-${alert.type || 'secondary'} alert-dismissible`} role="alert">
      {props.text}
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}
