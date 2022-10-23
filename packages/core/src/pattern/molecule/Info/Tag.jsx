/* eslint-disable no-shadow, jsx-a11y/no-static-element-interactions */
import { number, string, func } from 'prop-types'
import { Info } from '../../atom/Text/Info'
import { Icon } from '../../atom/Image/Icon'
import styles from './Tag.scss'

export function Tag({ onMouseDown, text, id }) {
  function handleMouseDown(onMouseDown) {
    onMouseDown(id)
  }

  return (
    <div onMouseDown={() => handleMouseDown(onMouseDown)} className={styles.tag}>
      <div className={styles.tagText}>
        <Info size="small" body={text} />
      </div>
      <div className={styles.tagImage}>
        <Icon name="cross" width="12" height="12" />
      </div>
    </div>
  )
}

Tag.defaultProps = {
  onMouseDown: () => {},
}

Tag.propTypes = {
  id: number.isRequired,
  text: string.isRequired,
  onMouseDown: func,
}
