import { withTests } from '@storybook/addon-jest'
import { MultiTag } from '../index'
import { intro, emails, telephones } from '../../../../data'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Tags/Organism/Card/MultiTag',
  component: MultiTag,
  decorators: [withTests({ results })],
  parameters: { jest: ['MultiTag.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <MultiTag intro={intro} mails={emails} telephones={telephones} />
}
