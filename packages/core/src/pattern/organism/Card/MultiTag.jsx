/* eslint-disable react/require-default-props */
import { arrayOf, shape, string, number } from 'prop-types'
import { Heading } from '../../atom/Title/Heading'
import { Info } from '../../atom/Text/Info'
import { Label } from '../../atom/Text/Label'
import { TagList } from '../../molecule/List/TagList'
import { Input } from '../../atom/Text/Input'
import styles from './MultiTag.scss'

export function MultiTag({ intro, mails, telephones }) {
  return (
    <div className={styles.multiTag}>
      <div className={styles.multiTagContainer}>
        <div className={styles.multiTagIntroTitle}>
          <Heading size="h4" text={intro.title} />
        </div>
        <div className={styles.multiTagIntroDescription}>
          <Info body={intro.description} />
        </div>

        <div className={styles.multiTagMailsTitle}>
          <Label size="small" text={mails.title} />
        </div>
        <TagList items={mails.items} />

        <div className={styles.multiTagTelephones}>
          <div className={styles.multiTagTelephonesTitle}>
            <Label size="small" text={telephones.title} />
          </div>
          <div className={styles.multiTagTelephonesInput}>
            <Input />
          </div>
          <Info size="small" body={telephones.description} />
        </div>
      </div>
    </div>
  )
}

MultiTag.propTypes = {
  intro: shape({
    title: string,
    description: string,
  }),
  mails: shape({
    title: string,
    items: arrayOf(
      shape({
        id: number,
        text: string,
      }),
    ),
  }),
  telephones: shape({
    title: string,
    description: string,
  }),
}
