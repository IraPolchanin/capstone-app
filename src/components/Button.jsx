import React from 'react'

export const Button = ({ modifier, position, text, type, disable }) => {
  return (
    <button
      type={type}
      className={`button button-${modifier} ${position}__btn`}
      aria-label={text}
      disabled={disable}
    >
      {text}
    </button>
  )
}
