/* eslint-disable react/prop-types, no-shadow */
import { useRef } from 'react'
import { bool, func } from 'prop-types'
import cx from 'classnames'
import styles from './Input.scss'

export function Input({ onChange, onKeyDown, borderless, val }) {
  const inputEl = useRef(null)

  function handleChange(onChange, e) {
    onChange(e)
  }

  function handleKeyDown(onKeyDown, e) {
    if (inputEl.current.value !== '' && (e.keyCode === 9 || e.keyCode === 188)) {
      e.preventDefault()
    }

    if ((inputEl.current.value === '' && e.keyCode === 8) || e.keyCode === 13 || e.keyCode === 9 || e.keyCode === 188) {
      onKeyDown(e)
    }
  }

  return (
    <input
      placeholder="Enter new text here"
      ref={inputEl}
      value={val}
      onChange={(e) => handleChange(onChange, e)}
      onKeyDown={(e) => handleKeyDown(onKeyDown, e)}
      className={cx(styles.input, {
        [styles.inputBorderless]: borderless,
      })}
    />
  )
}

Input.defaultProps = {
  borderless: false,
  onChange: () => {},
  onKeyDown: () => {},
}

Input.propTypes = {
  borderless: bool,
  onChange: func,
  onKeyDown: func,
}
