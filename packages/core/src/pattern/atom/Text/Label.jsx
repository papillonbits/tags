import { string, oneOf } from 'prop-types'
import cx from 'classnames'
import styles from './Label.scss'

export function Label({ size, text }) {
  return (
    <span
      className={cx(styles.label, {
        [styles.labelSmall]: size === 'small',
        [styles.labelMedium]: size === 'medium',
      })}
    >
      {text}
    </span>
  )
}

Label.defaultProps = {
  size: 'medium',
}

Label.propTypes = {
  text: string.isRequired,
  size: oneOf(['small', 'medium']),
}
