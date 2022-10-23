/* eslint-disable react/forbid-prop-types */
import { object } from 'prop-types'
import { MultiTag } from '../../organism/Card/MultiTag'
import styles from './MultiTagCard.scss'

export function MultiTagCard({ intro, mails, telephones }) {
  return (
    <div className={styles.multiTagCard}>
      <MultiTag intro={intro} mails={mails} telephones={telephones} />
    </div>
  )
}

MultiTagCard.propTypes = {
  intro: object.isRequired,
  mails: object.isRequired,
  telephones: object.isRequired,
}
