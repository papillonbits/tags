import { string } from 'prop-types'
import cx from 'classnames'
import styles from './Heading.scss'

export function Heading({ size, text }) {
  const { heading, headingH1, headingH2, headingH3, headingH4 } = styles

  return (
    <span
      className={cx(heading, {
        [headingH1]: size === 'h1',
        [headingH2]: size === 'h2',
        [headingH3]: size === 'h3',
        [headingH4]: size === 'h4',
      })}
    >
      {text}
    </span>
  )
}

Heading.propTypes = {
  size: string.isRequired,
  text: string.isRequired,
}
