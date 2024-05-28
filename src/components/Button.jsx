import React from 'react'

export const Button = ({ modifier, position, text, type, disable, ariaLabel }) => {
  return (
    <button
      type={type}
      className={`button button-${modifier} ${position}__btn`}
      aria-label={text}
      aria-disabled={disable ? "true" : "false"}
      disabled={disable}
    >
      {text}
    </button>
  )
}
