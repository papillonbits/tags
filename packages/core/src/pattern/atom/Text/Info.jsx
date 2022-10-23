/* eslint-disable react/require-default-props */
import { string, oneOf } from 'prop-types'
import cx from 'classnames'
import styles from './Info.scss'

export function Info({ size, body }) {
  return (
    <span
      className={cx(styles.info, {
        [styles.infoSmall]: size === 'small',
        [styles.infoMedium]: size === 'medium',
      })}
    >
      {body}
    </span>
  )
}

Info.propTypes = {
  body: string.isRequired,
  size: oneOf(['small', 'medium']),
}
